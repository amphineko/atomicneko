import { PropsWithChildren } from 'react'

export const Column = ({ children, width }: PropsWithChildren<{ width?: string }>) => (
    <>
        <div className="column">{children}</div>
        <style jsx>{`
            .column {
                width: ${width || '50%'};
            }
        `}</style>
    </>
)

export const Block = ({ children }: PropsWithChildren<{ breakpoint?: string }>) => (
    <>
        <section className="block">{children}</section>
        <style jsx>{`
            .block {
                background: #ffffffee;
                box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);
                align-items: center;
                display: flex;
                width: 100%;
            }

            .block {
                margin-top: 1rem;
            }
        `}</style>
    </>
)
