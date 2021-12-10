import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'

export const LabelItem = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <span className="label-item">
            {children}
            <style jsx>{`
                .label-item {
                    color: #222;
                    display: inline-block;
                    font-size: 1em;
                    vertical-align: baseline;
                }

                .label-item::before {
                    background: rgba(0, 0, 0, 0.25);
                    color: transparent;
                    content: '|';
                    font-size: 0.5em;
                    margin: 0 0.5em;
                    vertical-align: middle;
                }

                .label-item:first-child::before {
                    content: ' ';
                }
            `}</style>
        </span>
    )
}

export const LabelGroup = ({
    children,
    icon: Icon,
    title,
}: PropsWithChildren<{
    icon?: IconType
    title?: string
}>) => {
    return (
        <div className="label-group" title={title}>
            {Icon && <Icon className="icon" />}

            <div className="labels">{children}</div>

            <style jsx>{`
                .label-group {
                    background-color: #f5f5f5;
                    box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.1);
                    display: inline-block;
                    line-height: 2.25em;
                    margin: 1.25em 0.5em;
                    padding: 0 0.75em;
                    position: relative;
                }

                .label-group::before {
                    bottom: 2.5em;
                    color: white;
                    content: '${title}';
                    font-size: 0.75em;
                    position: absolute;
                    text-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
                }

                .icon {
                    display: inline-block;
                    vertical-align: -0.2em;
                }

                .labels {
                    display: inline-block;
                }
            `}</style>
        </div>
    )
}
