import { IoCloud, IoLanguage, IoLink, IoSchool } from 'react-icons/io5'
import { LabelGroup, LabelItem } from '../components/labels'
import { HeaderSection, ProfileNameStandout } from '../sections/header'

const IndexPage = () => (
    <div className="container">
        <HeaderSection
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
        </HeaderSection>

        <div className="placeholder"></div>

        <style jsx>{`
            .container {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
            }

            .silent-link {
                color: inherit;
                text-decoration: none;
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
                padding: 0;
            }
        `}</style>
    </div>
)

export default IndexPage
