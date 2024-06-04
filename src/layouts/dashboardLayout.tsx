import {RootLayout} from "./root-layout/root-layout.tsx";

export const DashboardLayout = (props: any) => {

    return (
        <>
            <div style={{height: '100vh', width: '100vw'}}>
                <RootLayout
                    sections={"sections"}
                    {...props}
                    children={props.children}
                />
            </div>
        </>
    );
};