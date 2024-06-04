import {FC, ReactNode} from 'react';
import {NavBar} from "../../components/global/navBar.tsx";

interface RootLayoutProps {
    sections: string;
    children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = (props) => {
    const {children, sections} = props;
    return (
        <div>
            <NavBar/>
            <div style={{
                background: "#f0f0f0",
                height: "inherit",
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                justifyContent: "center"
            }}>{children}</div>
            hello, {sections}
        </div>
    );
};