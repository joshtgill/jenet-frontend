import "./globals.css";

export type PanelData = {
    id: number;
    content?: React.ReactNode;
    className?: string;
};

type PanelProps = {
    content?: React.ReactNode;
    className?: string;
};

const Panel = ({ content, className }: PanelProps) => {
    return (
        <div
            className={
                `glass group max-w-200 min-w-110 relative flex flex-col p-4 rounded-xl overflow-auto ${className ?? ""}`
            }
        >
            {content}
        </div>
    );
};

export default Panel;
