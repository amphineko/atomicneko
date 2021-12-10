import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'

export const FooterParagraph = ({
    backgroundColor,
    color,
    children,
    icon: Icon,
}: PropsWithChildren<{ backgroundColor?: string; color?: string; icon: IconType }>) => (
    <>
        <p className="paragraph">
            <span className="icon">
                <Icon />
            </span>
            {children}
            {backgroundColor}
        </p>
        <style jsx>{`
            .paragraph {
                background-color: ${backgroundColor ?? '#354c64'};
                color: ${color ?? '#ddd'};
                font-size: 0.8em;
                margin: 0;
                padding: 0.75em 1em;
            }

            .icon {
                display: inline-block;
                font-size: 1.2em;
                vertical-align: middle;
                width: 1.25em;
            }
        `}</style>
    </>
)

export const Footer = ({ children }: PropsWithChildren<unknown>) => (
    <>
        <footer className="footer">{children}</footer>
        <style jsx>{`
            .footer {
                margin-top: 1rem;
            }
        `}</style>
    </>
)
