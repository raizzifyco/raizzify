
interface TermsProps {
    title: string;
    description: string;
}
const Terms = ({ title, description }: TermsProps) => {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-primaryTextColor font-medium text-lg">{title}</h2>
            <p className="text-muted-foreground">
                {description}
            </p>
        </div>
    )
}
export default Terms