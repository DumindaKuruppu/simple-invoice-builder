import {RootLayout} from "./root-layout/root-layout.tsx";

export const Layout = (props: any) => {

    return (
        <>
            <RootLayout
                sections={"sections"}
                {...props}

            />
            {JSON.stringify(props)}
        </>
    );
};