
// import { NextRequest } from "next/server";

export const runtime = 'edge';
import path from 'path';
import { writeFile } from 'fs/promises';
import { NextRequest } from 'next/server';

type User = {
    id: number;
    name?: string;
};
// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];


export async function GET(req: Request) {
    // let body = JSON.stringify(request.body);
    // console.log(res);
    return Response.json(users);
}

// export default function handler(res: NextApiResponse<User[]>) {
//   return res.status(200).json(users);
// }


export async function POST(req: NextRequest) {
    // const data  = await req.json();
    const file = (await req.formData()).get('file');

    // const buffer = Buffer.from(file as string, 'base64');
    const buffer = Buffer.alloc(5);
    const filename = 'uploadfile';

    console.log(buffer.length);

    try {
        await writeFile('public/uploads','public/uploads/' + filename, buffer);
    } catch (err) {
        console.error(err);
    }



    return Response.json({ message: 'successfully upload file' }, { status: 201 });
}



