import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Idaraobong Portfolio'
export const size = {
    width: 1200,
    height: 600,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    const profilePic = await readFile(
        join(process.cwd(), 'public', 'WhatsApp Image 2026-02-13 at 5.34.56 PM.jpeg')
    )

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #000000, #111)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        height: 400,
                        background: 'rgba(100, 100, 255, 0.05)',
                        filter: 'blur(80px)',
                        borderRadius: '50%',
                        zIndex: 0,
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <img
                        src={profilePic.buffer as any}
                        width="200"
                        height="200"
                        style={{
                            borderRadius: '100px',
                            border: '4px solid rgba(255, 255, 255, 0.1)',
                            objectFit: 'cover',
                            marginBottom: 30,
                            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                        }}
                    />

                    <div style={{
                        fontSize: 70,
                        fontWeight: 800,
                        marginBottom: 10,
                        textAlign: 'center',
                    }}>
                        Idaraobong
                    </div>
                    <div style={{
                        fontSize: 32,
                        color: '#aaa',
                        textAlign: 'center',
                    }}>
                        Fullstack Web Developer
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
