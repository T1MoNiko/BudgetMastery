import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
    title: string;
    path: string;
    MuiComponentType: React.ComponentType<{ sx?: Record<string, any> }>;
    sx: Record<string, any>;
    className: string;
}

export function NavIcon({
    title,
    path,
    MuiComponentType,
    sx,
    className
}: IProps) {
    const pathname = usePathname();

    return (
        <Link href={path}  className={`flex flex-col justify-center items-center ${className}`} style={{cursor: 'pointer'}}>
            <MuiComponentType
                sx={{
                    ...sx,
                    color: pathname === path ? "#4aecd6" : "#565d8b",
                }}
            />
            <p
                className="text-white text-sm"
                style={{
                    color: pathname === path ? "#4aecd6" : "#565d8b",
                }}
            >
                {title}
            </p>
        </Link>
    );
}
