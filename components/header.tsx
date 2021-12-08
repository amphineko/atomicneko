import { PropsWithChildren, ReactNode } from 'react'

export const ProfileNameStandout = ({
    backgroundColor,
    children,
    hoverColor,
    hoverContent,
    ruby,
}: PropsWithChildren<{
    backgroundColor: string
    hoverColor: string
    hoverContent?: ReactNode
    ruby: string
}>) => (
    <>
        <a aria-role="none" className="standout" href="#">
            {children}
        </a>
        <style jsx>{`
            .standout {
                background: ${backgroundColor};
                border-radius: 0.25em;
                box-shadow: 0 0 0.1em 0.1em rgba(0 0 0 0.05);
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
                position: absolute;
                top: 2.5em;
                transition-duration: 0.5s;
            }

            .standout:hover {
                background: ${hoverColor};
            }

            .standout:hover::after {
                color: #aaa;
                content: '${hoverContent || ruby || ''}';
            }
        `}</style>
    </>
)

export const ProfileName = ({ children }: PropsWithChildren<{}>) => (
    <span className="profile-name">
        {children}
        <style jsx>{`
            .profile-name {
                color: white;
                font-family: 'Courier New';
                font-size: 2.5rem;
                padding: 1rem;
            }
        `}</style>
    </span>
)

export const HeaderSection = () => (
    <div className="row">
        <div className="column left-side">
            <a
                className="head-picture-container"
                href="/assets/images/amphineko.png"
            >
                <img
                    alt="head picture of amphineko"
                    className="head-picture"
                    src="/assets/images/amphineko.png"
                />
            </a>
        </div>
        <div className="column right-side">
            <ProfileName>
                amphi
                <ProfileNameStandout
                    backgroundColor="hsla(0, 100%, 82%, 0.25)"
                    hoverContent="ね"
                    hoverColor="hsla(0, 100%, 82%, 0.75)"
                    ruby="10"
                >
                    ne
                </ProfileNameStandout>
                ko
            </ProfileName>
        </div>

        <style jsx>{`
            .row {
                align-items: center;
                display: flex;
                margin: 0 auto;
                max-width: 48em;
            }

            .column {
                padding: 1rem;
            }

            .left-side {
                width: 40%;
            }

            .right-side {
                width: 60%;
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
