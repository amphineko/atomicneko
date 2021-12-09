import { PropsWithChildren, ReactNode } from 'react'

export const ProfileNameStandout = ({
    backgroundColor,
    children,
    hoverColor,
    hoverRuby,
    href,
    ruby,
}: PropsWithChildren<{
    backgroundColor: string
    hoverColor: string
    hoverRuby?: string
    href?: string
    ruby?: string
}>) => {
    ruby = ruby || ''
    hoverRuby = hoverRuby || ruby || ''
    href = href || '#'

    return (
        <>
            <a className="standout" href={href} rel="noreferrer" target="_blank">
                {children}
            </a>
            <style jsx>{`
                .standout {
                    background: ${backgroundColor};
                    border-radius: 0.25em;
                    box-shadow: 0 0 0.1em 0.1em rgba(0, 0, 0, 0.05);
                    color: white;
                    display: inline-block;
                    padding: 0.1em;
                    position: relative;
                    text-decoration: none;
                    transition-duration: 0.5s;
                }

                .standout::after {
                    color: #7f7f7f;
                    content: '${ruby || ''}';
                    display: block;
                    font-size: 0.5em;
                    line-height: 1.5em;
                    position: absolute;
                    top: 2.5em;
                    transition-duration: 0.5s;
                }

                .standout:hover {
                    background: ${hoverColor};
                    box-shadow: 0 0 0.2em 0.2em rgba(0, 0, 0, 0.1);
                }

                .standout:hover::after {
                    color: #aaa;
                    content: '${hoverRuby}';
                }
            `}</style>
        </>
    )
}

export const ProfileName = ({ children }: PropsWithChildren<unknown>) => (
    <div className="profile-name">
        {children}
        <style jsx>{`
            .profile-name {
                color: white;
                font-family: 'Courier New';
                font-size: 2.5rem;
                margin: 0 0.25em;
                padding: 2rem 0;
            }
        `}</style>
    </div>
)

export const HeaderSection = ({
    breakpoint,
    children,
    profileName,
}: PropsWithChildren<{ breakpoint?: string; profileName: ReactNode }>) => (
    <div className="row">
        <div className="column left-side">
            <a className="head-picture-container" href="/assets/images/amphineko.png">
                <img alt="head picture of amphineko" className="head-picture" src="/assets/images/amphineko.png" />
            </a>
        </div>
        <div className="column right-side">
            <ProfileName>{profileName}</ProfileName>
            <div>{children}</div>
        </div>

        <style jsx>{`
            .row {
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                margin: 0 auto;
                max-width: 48em;
            }

            .column {
                box-sizing: border-box;
                padding: 1em;
            }

            .left-side {
                max-width: 40%;
            }

            .right-side {
                max-width: 60%;
            }

            @media (max-width: ${breakpoint ?? '36em'}) {
                .left-side,
                .right-side {
                    max-width: 100%;
                }
            }

            .head-picture {
                height: 100%;
                width: 100%;
            }

            .head-picture-container {
                background: #fff;
                border: 0.5em solid #fff;
                border-radius: 50%;
                box-shadow: 0 0 0.15em 0.15em rgb(0 0 0 / 15%);
                display: block;
                overflow: hidden;
            }
        `}</style>
    </div>
)
