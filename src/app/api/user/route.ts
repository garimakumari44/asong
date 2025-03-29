import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { hash } from 'bcrypt';
import {z} from 'zod'
import { v4 as uuidv4 } from 'uuid';




const userSchema = z.object({
    name: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters"),
    email: z.string()
    .email("Invalid email address")
    .transform(val => val.toLowerCase().trim()),
    password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters"),
   
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, name, password } = userSchema.parse(body);

        // Validate required fields
        if (!email || !name || !password) {
            return NextResponse.json(
                { user: null, message: "All fields are required" },
                { status: 400 }
            );
        }

        // Check for existing user by email
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });

        if (existingUserByEmail) {
            return NextResponse.json(
                { user: null, message: "User with this email already exists" },
                { status: 409 }
            );
        }

        const existingUserByUsername = await db.user.findFirst({
            where: { name: name }
        });
        if (existingUserByUsername) {
            return NextResponse.json(
                { user: null, message: "User with this username already exists" },
                { status: 409 }
            );
        }

        // Hash password
         const hashedPassword = await hash(password, 10);

        // Create new user
        const newUser = await db.user.create({
            data: {
                id: uuidv4(),
                name,
                email,
                password: hashedPassword
            }
        });

        // Remove password from response for security
        const { password:  userWithoutPassword } = newUser;

        return NextResponse.json(
            { user: userWithoutPassword, message: "User created successfully" },
            { status: 201 }
        );

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { user: null, message: "Internal server error" },
            { status: 500 }
        );
    }
}