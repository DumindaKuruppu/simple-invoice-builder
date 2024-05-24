import {FC, ReactNode} from 'react';

interface RootLayoutProps {
    sections: string;
    children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = (props) => {
    const {children} = props;
    return (
        <div>
            {children}
        </div>
    );
};