import { HeaderSection } from '../components/header'

const IndexPage = () => (
    <div className="container">
        <HeaderSection />

        <style jsx>{`
            .container {
                min-height: 100vh;
                padding: 2rem 0;
            }
        `}</style>
        <style jsx global>{`
            body {
                background: url('/assets/images/background.svg');
                background-color: #aaa;
                font-family: 'Helvetica Neue', Helvetica, Arial,
                    'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                    'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体',
                    'sans-serif';
                margin: 0;
                padding: 0;
            }
        `}</style>
    </div>
)

export default IndexPage
