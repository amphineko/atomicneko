import {
    FaCompactDisc,
    FaExternalLinkAlt,
    FaGithub,
    FaGooglePlusG,
    FaSteam,
    FaTelegramPlane,
    FaTwitter,
    FaWeibo,
} from 'react-icons/fa'
import { IoBulb, IoCloud, IoGitBranch, IoLanguage, IoLink, IoSchool } from 'react-icons/io5'
import { Account, AccountList, Description, Paragraph } from '../components/blocks'
import { LabelGroup, LabelItem } from '../components/labels'
import { Block, Column } from '../sections/block'
import { Footer, FooterParagraph } from '../sections/footer'
import { Header, ProfileNameStandout } from '../sections/header'

const IndexPage = () => (
    <div className="container">
        <Header
            profileName={
                <>
                    amphi
                    <ProfileNameStandout
                        backgroundColor="hsla(0, 100%, 82%, 0.25)"
                        href="https://en.wikipedia.org/wiki/Neon"
                        hoverRuby="ね"
                        hoverColor="hsla(0, 100%, 82%, 0.75)"
                        ruby="10"
                    >
                        ne
                    </ProfileNameStandout>
                    ko
                </>
            }
        >
            <div>
                <LabelGroup icon={IoLink} title="a.k.a.">
                    <LabelItem>atomic::akarin</LabelItem>
                </LabelGroup>
            </div>
            <div>
                <LabelGroup icon={IoLanguage} title="languages">
                    <LabelItem>汉语</LabelItem>
                    <LabelItem>漢語</LabelItem>
                    <LabelItem>English</LabelItem>
                </LabelGroup>
                <LabelGroup icon={IoSchool} title="status">
                    <LabelItem>M.Sc. in progress</LabelItem>
                </LabelGroup>
                <LabelGroup icon={IoCloud} title="aut-num">
                    <LabelItem>
                        <a
                            className="silent-link"
                            href="https://www.peeringdb.com/net/15170"
                            rel="noreferrer"
                            target="_blank"
                        >
                            205058
                        </a>
                    </LabelItem>
                    <LabelItem>
                        <a
                            className="silent-link"
                            href="https://www.peeringdb.com/net/24185"
                            rel="noreferrer"
                            target="_blank"
                        >
                            38023
                        </a>
                    </LabelItem>
                </LabelGroup>
            </div>
        </Header>

        <Block>
            <Column>
                <Description>
                    {/* <Paragraph>who is amphineko?</Paragraph> */}
                    <Paragraph>Passionate full-stack software developer and open-source contributor.</Paragraph>
                    <Paragraph>Amautar network engineer operating own Internet autonomous systems.</Paragraph>
                    <Paragraph>Contact me if you&apos;re interested to hire me :D</Paragraph>
                </Description>
            </Column>
            <Column>
                <AccountList title="open-source">
                    <Account href="https://github.com/amphineko/" icon={FaGithub} title="GitHub">
                        amphineko
                    </Account>
                </AccountList>
                <AccountList title="social network">
                    <Account href="#" icon={FaGooglePlusG} strikethrough title="Google+">
                        [unavailable]
                    </Account>
                    <Account href="https://telegram.me/amphineko" icon={FaTelegramPlane} title="Telegram">
                        @amphineko
                    </Account>
                    <Account href="https://twitter.com/amphineko/" icon={FaTwitter} title="Twitter">
                        @amphineko
                    </Account>
                    <Account href="#" icon={FaWeibo} strikethrough title="Weibo">
                        [redacted]
                    </Account>
                </AccountList>
            </Column>
        </Block>

        <Block>
            <Column>
                <Description>
                    {/* <Paragraph>who is amphineko?</Paragraph> */}
                    <Paragraph>
                        ardently love fps, simulation and galgames
                        <br />
                        rhythm game is LIFE!
                        <br />
                        ingress (mission collection only) agent
                    </Paragraph>
                    <Paragraph>
                        <del className="deleted">dream to be a civil aviation pilot</del>
                    </Paragraph>
                </Description>
            </Column>
            <Column>
                <AccountList title="profiles">
                    <Account href="https://osu.ppy.sh/users/1344051" icon={FaCompactDisc} title="osu!">
                        Rukatan
                    </Account>
                    <Account href="https://steamcommunity.com/id/amphineko/" icon={FaSteam} title="Steam">
                        1kar0s
                    </Account>
                </AccountList>
            </Column>
        </Block>

        <Footer>
            <FooterParagraph icon={IoGitBranch}>
                <a className="footer-link" href="https://github.com/amphineko/atomicneko">
                    Fork this template on GitHub
                </a>
                <span className="footer-external-link-icon">
                    <FaExternalLinkAlt />
                </span>
            </FooterParagraph>
            <FooterParagraph icon={IoBulb}>
                Copyright © 2015-2021 amphineko. Illustrations have their own licenses.
            </FooterParagraph>
        </Footer>

        <style jsx>{`
            .container {
                background: url('/assets/images/background-header.svg') no-repeat;
                background-color: #aaa;
                background-size: cover;
                border-top-left-radius: 1rem;
                box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);
                display: flex;
                flex-direction: column;
                max-width: 64em;
                margin: 0 auto;
            }

            .footer-link {
                color: inherit;
                text-decoration: none;
            }

            .footer-external-link-icon {
                font-size: 0.75em;
                margin-left: 0.5em;
                vertical-align: 0.25em;
            }

            .silent-link {
                color: inherit;
                text-decoration: none;
            }

            .deleted {
                color: #777;
            }
        `}</style>

        <style jsx global>{`
            body {
                background: url('/assets/images/background.svg') no-repeat;
                background-color: #aaa;
                background-size: cover;
                font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                    'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体', 'sans-serif';
                margin: 0;
                min-height: 100vh;
                padding: 1em 0;
            }
        `}</style>
    </div>
)

export default IndexPage
