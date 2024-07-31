const RefundCancellation = () => {

    const date = new Date();
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex max-w-screen-sm flex-col gap-y-4">
                <p className="text-sm font-light">Last Updated on {date.getDate()}</p>
                <h1 className="text-4xl font-semibold text-primaryTextColor">Refund and Cancellation Policy</h1>

                <div className="flex flex-col gap-y-4 text-muted-foreground font-light">
                   <p>{'RETURN POLICY'}</p>

                   <p>{'Last updated July 24, 2024'}</p>



                   <p>{'REFUNDS'}</p>

                   <p>{'All sales are final and no refund will be issued.'}</p>

                   <p>{'QUESTIONS'}</p>

                   <p>{'If you have any questions concerning our return policy, please contact us at:'}</p>

                   <p>{'customerservice@raizzify.com'}</p>


                </div>
            </div>
        </div>
    )
}
export default RefundCancellation