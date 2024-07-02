import Terms from "@/components/terms";
import { copyRight, disclaimers, governingLaw, idemnification, noticesInfrigement, thirdParty, trademarks, useSiteContent } from "@/lib/terms-text";

const TermsService = () => {
  const date = new Date();
  return (
    <div className="flex items-center justify-center min-h-screen py-14">
      <div className="flex max-w-screen-sm flex-col gap-y-4">
        <p className="text-sm font-light">Last Updated on {date.getDate()}</p>
        <h1 className="text-4xl font-semibold text-primaryTextColor">Terms of use</h1>

        <div className="flex flex-col gap-y-4 text-muted-foreground font-light">
          <p className="text-muted-foreground">Inception Collective and its affiliates (“IC” or “we”) provides its content on its websites or applications that post a link to this Terms of Use (the “Site”) subject to the following terms and conditions (the “Terms”). We may periodically change the Terms without prior notice, so please check back from time to time. These Terms were last updated on May 2, 2024. By accessing and using this Site, you agree to these Terms. For an explanation of IC’s practices and policies related to the collection, use, and storage of our users’ information, please read our Privacy Policy.</p>

          <Terms title="1. Copyrights" description={copyRight} />
          <Terms title="2. Trademarks" description={trademarks} />
          <Terms title="3. Use of site content" description={useSiteContent} />
          <div className="flex flex-col gap-y-2">
            <h2 className="text-primaryTextColor font-medium text-lg">4.User Postings</h2>
            <p className="text-muted-foreground">
              You acknowledge and agree that Inception Collective shall own and have the unrestricted right to use, publish, and otherwise exploit any and all information that you post or otherwise publish on the Site in postings, forums or message boards, questionnaire, survey responses, and otherwise, and you acknowledge and agree that, by providing us any such submission, you automatically grant, and hereby do grant, to us a worldwide, non-exclusive, transferable, assignable, sublicensable, fully paid-up, royalty-free, perpetual, irrevocable license and right to use, reproduce, publish, distribute, modify and otherwise exploit such submission for any purpose, and in any form or media, not prohibited by applicable law. In addition, you hereby waive any claims against Inception Collective for any alleged or actual infringements of any rights of privacy or publicity, intellectual property rights, moral rights, or rights of attribution in connection with Inception Collective’s use and publication of such submissions.
            </p>
            <p className="text-muted-foreground my-8">
              You covenant that you shall not post or otherwise publish on the Site any materials that (a) are threatening, libelous, defamatory, or obscene; (b) would constitute, or that encourage conduct that would constitute, a criminal offense, give rise to civil liability, or otherwise violate law; (c) infringe the intellectual property, privacy, or other rights of any third parties; (d) contain a computer virus or other destructive element; (e) contain advertising; (f) constitute or contain false or misleading statements; or (g) violates these Terms.
            </p>
            <p className="text-muted-foreground mb-6">
              Inception Collective does not represent or endorse the accuracy of reliability of information posted to the Site by users. In addition, Inception Collective does not and cannot review all information posted to the Site by users and is not responsible for such information. However, Inception Collective reserves the right to refuse to post and the right to remove any information, in whole or in part, for any reason or for no reason.
            </p>
          </div>
          <Terms
            title="5. Notices of infringement and takedown by Inception"
            description={noticesInfrigement} />
          <Terms title="6. Disclaimers" description={disclaimers} />
          <Terms title="7. Idemnification" description={idemnification} />
          <Terms title="8. Third-party websites & Providers" description={thirdParty} />
          <Terms title="9. Governing law; jurisdiction" description={governingLaw} />
        </div>

      </div>
    </div>
  )
}
export default TermsService