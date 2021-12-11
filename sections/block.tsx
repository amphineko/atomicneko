import { PropsWithChildren } from 'react'

export const Column = ({ children, width }: PropsWithChildren<{ width?: string }>) => (
    <>
        <div className="column">{children}</div>
        <style jsx>{`
            .column {
                flex-basis: ${width || '50%'};
            }

            @media (max-width: 40rem) {
                .column {
                    flex-basis: 100%;
                }
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
                flex: 1;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
            }

            .block {
                margin-top: 1rem;
            }
        `}</style>
    </>
)
