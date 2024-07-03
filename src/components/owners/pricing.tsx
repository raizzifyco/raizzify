import PricingTabs from "./pricing-tabs"

const Pricing = () => {
    return (
        <div className="mt-14 xl:px-40 lg:px-16 px-4 py-10">
            <h1 className="text-center font-semibold md:text-[56px] text-[32px]">Pricing Coming Soon</h1>
            <p className="text-muted-foreground text-center">Empower your users by building cards, accounts, payments, and lending <br /> products — as easy as plug-and-play.</p>

            <PricingTabs />
        </div>
    )
}
export default Pricing