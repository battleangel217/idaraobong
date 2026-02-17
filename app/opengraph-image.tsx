import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const alt = 'Idaraobong Portfolio'
export const size = {
    width: 1200,
    height: 630,
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
                    background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Abstract Shapes */}
                <div
                    style={{
                        position: 'absolute',
                        top: -100,
                        left: -100,
                        width: 400,
                        height: 400,
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '50%',
                        filter: 'blur(100px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -100,
                        right: -100,
                        width: 500,
                        height: 500,
                        background: 'rgba(50, 100, 255, 0.1)',
                        borderRadius: '50%',
                        filter: 'blur(120px)',
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    {/* Profile Picture */}
                    <img
                        src={profilePic.buffer as any}
                        width="250"
                        height="250"
                        style={{
                            borderRadius: '125px',
                            border: '4px solid rgba(255, 255, 255, 0.1)',
                            objectFit: 'cover',
                            marginBottom: 40,
                            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                        }}
                    />

                    <div style={{
                        fontSize: 80,
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(to right, #fff, #aaa)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        marginBottom: 20,
                    }}>
                        Idaraobong
                    </div>
                    <div style={{
                        fontSize: 40,
                        fontWeight: 400,
                        color: '#888',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        Fullstack Web Developer
                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}
