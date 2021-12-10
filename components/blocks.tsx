import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const Paragraph = ({ children }: PropsWithChildren<unknown>) => (
    <>
        <p>{children}</p>
        <style jsx>{`
            p {
                font-size: 1.25em;
                font-weight: 300;
                line-height: 1.75em;
            }
        `}</style>
    </>
)

export const Description = ({ children }: PropsWithChildren<unknown>) => (
    <>
        <div className="description">{children}</div>
        <style jsx>{`
            .description {
                display: block;
                padding: 1.5em;
            }
        `}</style>
    </>
)

export const Account = ({
    children,
    href,
    icon: Icon,
    strikethrough,
    title,
}: PropsWithChildren<{ href: string; icon: IconType; strikethrough?: boolean; title: string }>) => (
    <>
        <li className="account-item">
            <a className="link" href={href}>
                <span className="icon">{Icon && <Icon />}</span>
                <span className="title">{title}</span>
                <span className="account">{children}</span>
            </a>
        </li>

        <style jsx>{`
            .account-item {
                font-size: 1.1em;
                list-style: none;
                padding: 0;
            }

            .link {
                color: inherit;
                display: block;
                line-height: 2.5em;
                text-decoration: none;
                transition-duration: 0.5s;
            }

            .link:hover {
                background-color: #01697c0d;
            }

            .icon {
                color: #333;
                font-size: 0.9em;
                text-align: center;
                vertical-align: -0.1em;
                width: 2em;
            }

            .title {
                color: #333;
            }

            .account {
                color: #317589;
                float: right;
            }

            .icon,
            .title,
            .account {
                display: inline-block;
                ${strikethrough && 'text-decoration: line-through;'}
            }
        `}</style>
    </>
)

export const AccountList = ({ children, title }: PropsWithChildren<{ title: string }>) => (
    <>
        <figure className="account-list">
            <figcaption className="caption">
                {title}
                <span className="caption-icon">
                    <FaExternalLinkAlt />
                </span>
            </figcaption>
            <ul className="list">{children}</ul>
        </figure>

        <style jsx>{`
            .account-list {
                margin: 0;
                padding: 1.5em;
            }

            .caption {
                color: #999;
                line-height: 1.5em;
                padding-left: 0.25em;
            }

            .caption-icon {
                font-size: 0.6em;
                margin-left: 0.25em;
                vertical-align: 0.75em;
            }

            .list {
                margin: 0;
                padding: 0;
            }
        `}</style>
    </>
)
