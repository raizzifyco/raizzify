import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import YearlyPricing from "../yearly-pricing"
import MonthlyPricing from "./monthly-pricing"

const PricingTabs = () => {
    return (
        <div className="sm:px-16 mt-10">
            <Tabs defaultValue="month" className="w-full flex items-center flex-col">
                <TabsList className="">
                    <TabsTrigger value="month">Bill Monthly</TabsTrigger>
                    <TabsTrigger value="year">Bill Yearly</TabsTrigger>
                </TabsList>

                <TabsContent value="year">
                    <MonthlyPricing />
                </TabsContent>
                <TabsContent value="month">
                    <MonthlyPricing />
                </TabsContent>
            </Tabs>

        </div>
    )
}
export default PricingTabs