const RefundCancellation = () => {

    const date = new Date();
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex max-w-screen-sm flex-col gap-y-4">
                <p className="text-sm font-light">Last Updated on {date.getDate()}</p>
                <h1 className="text-4xl font-semibold text-primaryTextColor">Refund and Cancellation Policy</h1>

                <div className="flex flex-col gap-y-4 text-muted-foreground font-light">
                    <p>WHENEVER YOU PURCHASE OUR SERVICES, THIS INDICATES YOUR COMMITMENT TO PARTICIPATE IN THE PROCESS AND INTEREST IN OUR SERVICES, HOWEVER, WE ALSO UNDERSTAND THAT SOMETIMES THINGS DON’T MOVE AS INTENDED.</p>
                    <p>THEREFORE, WE ARE LISTING HEREWITH GENERAL GUIDELINES FOR REFUNDS AND CANCELLATIONS,</p>
                    <p>GENERALLY, WE DO NOT OFFER ANY MONEY-BACK GUARANTEES, ALL SALES ARE FINAL AND IRREVERSIBLE.</p>
                    <p>THEREFORE, ANY AMOUNT ONCE PAID FOR BUYING ANY OF OUR SERVICES WILL NOT BE REVERSIBLE UNDER ANY CIRCUMSTANCES, AND HENCE NO REFUND WILL BE ISSUED.</p>
                    <p>SO, WHENEVER YOU BUY ANY OF OUR SERVICES, WE WILL PRESUME THAT YOU RECOGNIZE AND AGREE THAT YOU SHALL NOT BE ENTITLED TO ANY REFUND UNDER ANY CIRCUMSTANCES.</p>
                    <p>YOU MAY CONTACT US BY USING THE FOLLOWING CONTACT DETAILS:</p>
                    <p>Email : </p>
                    <p>THANK YOU FOR TAKING THE TIME TO READ AND UNDERSTAND OUR REFUND AND CANCELLATION POLICY.</p>
                </div>
            </div>
        </div>
    )
}
export default RefundCancellation