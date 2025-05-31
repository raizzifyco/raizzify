import Terms from "@/components/terms";
import {
  copyRight,
  disclaimers,
  governingLaw,
  idemnification,
  noticesInfrigement,
  thirdParty,
  trademarks,
  useSiteContent,
} from "@/lib/terms-text";

const TermsService = () => {
  const date = new Date();
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen py-14 font-manrope">
        <div className="flex max-w-screen-sm flex-col gap-y-4">
          <p className="text-sm font-light">Last Updated on {date.getDate()}</p>
          <h1 className="text-4xl font-semibold text-primaryTextColor">
            Terms of use
          </h1>

          <div className="flex flex-col gap-y-4 text-muted-foreground font-light">
            {/* <p className="text-muted-foreground">Inception Collective and its affiliates (“IC” or “we”) provides its content on its websites or applications that post a link to this Terms of Use (the “Site”) subject to the following terms and conditions (the “Terms”). We may periodically change the Terms without prior notice, so please check back from time to time. These Terms were last updated on May 2, 2024. By accessing and using this Site, you agree to these Terms. For an explanation of IC’s practices and policies related to the collection, use, and storage of our users’ information, please read our Privacy Policy.</p> */}
            <p className="font-bold">
              TERMS AND CONDITIONS Last updated July 24, 2024
            </p>

            <p>
              <strong>AGREEMENT TO OUR LEGAL TERMS</strong>
            </p>

            <p>
              {
                ' We are Raizzify Products and Services Private Limited, doing business as Raizzify and Raizzify Business ("Company," "we," "us," "our"), a company registered in India at 10-11 Govind Nagar , Mandsaur, Madhya Pradesh 458001.'
              }
            </p>

            <p>
              {
                ' We operate the website http://www.raizzify.com (the "Site"), the mobile application Raizzify (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").'
              }
            </p>

            <p>{" The all-in-one platform purpose-built for Salon Owners"}</p>

            <p>
              {
                " You can contact us by phone at 9340151678, email at privacy@raizzify.com, or by mail to 10-11 Govind Nagar , Mandsaur, Madhya Pradesh 458001, India."
              }
            </p>

            <p>
              {
                ' These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Raizzify Products and Services Private Limited, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.'
              }
            </p>

            <p>
              {
                ' Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.'
              }
            </p>

            <p>
              {
                " All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services."
              }
            </p>

            <p>
              {
                " We recommend that you print a copy of these Legal Terms for your records."
              }
            </p>

            <p>
              <strong>{" TABLE OF CONTENTS"}</strong>
            </p>
            <p>
              <strong>{" 1. OUR SERVICES"}</strong>
            </p>
            <p>
              <strong>{" 2. INTELLECTUAL PROPERTY RIGHTS"}</strong>
            </p>
            <p>
              <strong>{" 3. USER REPRESENTATIONS"}</strong>
            </p>
            <p>
              <strong>{" 4. USER REGISTRATION"}</strong>
            </p>
            <p>
              <strong>{" 5. PURCHASES AND PAYMENT"}</strong>
            </p>
            <p>
              <strong>{" 6. SUBSCRIPTIONS"}</strong>
            </p>
            <p>
              <strong>{" 7. SOFTWARE"}</strong>
            </p>
            <p>
              <strong>{" 8. PROHIBITED ACTIVITIES"}</strong>
            </p>
            <p>
              <strong>{" 9. USER GENERATED CONTRIBUTIONS"}</strong>
            </p>
            <p>
              <strong>{" 10. CONTRIBUTION LICENSE"}</strong>
            </p>
            <p>
              <strong>{" 11. GUIDELINES FOR REVIEWS"}</strong>
            </p>
            <p>
              <strong>{" 12. MOBILE APPLICATION LICENSE"}</strong>
            </p>
            <p>
              <strong>{" 13. SOCIAL MEDIA"}</strong>
            </p>
            <p>
              <strong>{" 14. THIRD-PARTY WEBSITES AND CONTENT"}</strong>
            </p>
            <p>
              <strong>{" 15. ADVERTISERS"}</strong>
            </p>
            <p>
              <strong>{" 16. SERVICES MANAGEMENT"}</strong>
            </p>
            <p>
              <strong>{" 17. PRIVACY POLICY"}</strong>
            </p>
            <p>
              <strong>{" 18. COPYRIGHT INFRINGEMENTS"}</strong>
            </p>
            <p>
              <strong>{" 19. TERM AND TERMINATION"}</strong>
            </p>
            <p>
              <strong>{" 20. MODIFICATIONS AND INTERRUPTIONS"}</strong>
            </p>
            <p>
              <strong>{" 21. GOVERNING LAW"}</strong>
            </p>
            <p>
              <strong>{" 22. DISPUTE RESOLUTION"}</strong>
            </p>
            <p>
              <strong>{" 23. CORRECTIONS"}</strong>
            </p>
            <p>
              <strong>{" 24. DISCLAIMER"}</strong>
            </p>
            <p>
              <strong>{" 25. LIMITATIONS OF LIABILITY"}</strong>
            </p>
            <p>
              <strong>{" 26. INDEMNIFICATION"}</strong>
            </p>
            <p>
              <strong>{" 27. USER DATA"}</strong>
            </p>
            <p>
              <strong>
                {" 28. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES"}
              </strong>
            </p>
            <p>
              <strong>{" 29. SMS TEXT MESSAGING"}</strong>
            </p>
            <p>
              <strong>{" 30. MISCELLANEOUS"}</strong>
            </p>
            <p>
              <strong>{" 31. CONTACT US"}</strong>
            </p>

            <p>
              <strong>{" 1. OUR SERVICES"}</strong>
            </p>

            <p>
              {
                " The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable."
              }
            </p>

            <p>
              <strong>{" 2. INTELLECTUAL PROPERTY RIGHTS"}</strong>
            </p>

            <p>{" Our intellectual property"}</p>

            <p>
              {
                ' We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").'
              }
            </p>

            <p>
              {
                " Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world."
              }
            </p>

            <p>
              {
                ' The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.'
              }
            </p>

            <p>{" Your use of our Services"}</p>

            <p>
              {
                ' Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:'
              }
            </p>
            <p>{" 	access the Services; and"}</p>
            <p>
              {
                " 	download or print a copy of any portion of the Content to which you have properly gained access."
              }
            </p>
            <p>
              {
                " solely for your personal, non-commercial use or internal business purpose."
              }
            </p>

            <p>
              {
                " Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission."
              }
            </p>

            <p>
              {
                " If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: privacy@raizzify.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content."
              }
            </p>

            <p>
              {
                " We reserve all rights not expressly granted to you in and to the Services, Content, and Marks."
              }
            </p>

            <p>
              {
                " Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately."
              }
            </p>

            <p>{" Your submissions and contributions"}</p>

            <p>
              {
                ' Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.'
              }
            </p>

            <p>
              {
                ' Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.'
              }
            </p>

            <p>
              {
                ' Contributions: The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.'
              }
            </p>

            <p>
              {
                " You understand that Contributions may be viewable by other users of the Services and possibly through third-party websites."
              }
            </p>

            <p>
              {
                " When you post Contributions, you grant us a license (including use of your name, trademarks, and logos): By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section. Our use and distribution may occur in any media formats and through any media channels."
              }
            </p>

            <p>
              {
                " This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide."
              }
            </p>

            <p>
              {
                " You are responsible for what you post or upload: By sending us Submissions and/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts, you:"
              }
            </p>
            <p>
              {
                ' 	confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;'
              }
            </p>
            <p>
              {
                " 	to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;"
              }
            </p>
            <p>
              {
                " 	warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and"
              }
            </p>
            <p>
              {
                " 	warrant and represent that your Submissions and/or Contributions do not constitute confidential information."
              }
            </p>
            <p>
              {
                " You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law."
              }
            </p>

            <p>
              {
                " We may remove or edit your Content: Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities."
              }
            </p>

            <p>{" Copyright infringement"}</p>

            <p>
              {
                ' We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately refer to the "COPYRIGHT INFRINGEMENTS" section below.'
              }
            </p>

            <p>{" 3. USER REPRESENTATIONS"}</p>

            <p>
              {
                " By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation."
              }
            </p>

            <p>
              {
                " If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof)."
              }
            </p>

            <p>{" 4. USER REGISTRATION"}</p>

            <p>
              {
                " You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable."
              }
            </p>

            <p>{" 5. PURCHASES AND PAYMENT"}</p>

            <p>{" We accept the following forms of payment:"}</p>

            <p>{" -  Visa"}</p>
            <p>{" -  Mastercard"}</p>
            <p>{" -  PayPal"}</p>
            <p>{" -  UPI"}</p>
            <p>{" -  Credit Card"}</p>
            <p>{" -  Debit Card"}</p>

            <p>
              {
                " You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Rupees."
              }
            </p>

            <p>
              {
                " You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment."
              }
            </p>

            <p>
              {
                " We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors."
              }
            </p>

            <p>
              <strong>{" 6. SUBSCRIPTIONS"}</strong>
            </p>

            <p>{" Billing and Renewal"}</p>

            <p>
              {
                " Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services."
              }
            </p>

            <p>{" Free Trial"}</p>

            <p>
              {
                " We offer a 3-day free trial to new users who register with the Services. The account will not be charged and the subscription will be suspended until upgraded to a paid version at the end of the free trial."
              }
            </p>

            <p>{" Cancellation"}</p>

            <p>
              {
                " All purchases are non-refundable. You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at privacy@raizzify.com."
              }
            </p>

            <p>{" Fee Changes"}</p>

            <p>
              {
                " We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law."
              }
            </p>

            <p>
              <strong>{" 7. SOFTWARE"}</strong>
            </p>

            <p>
              {
                ' We may include software for use in connection with our Services. If such software is accompanied by an end user license agreement ("EULA"), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Legal Terms. Any software and any related documentation is provided "AS IS" without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risk arising out of use or performance of any software. You may not reproduce or redistribute any software except in accordance with the EULA or these Legal Terms.'
              }
            </p>

            <p>
              <strong>{" 8. PROHIBITED ACTIVITIES"}</strong>
            </p>

            <p>
              {
                " You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us."
              }
            </p>

            <p>{" As a user of the Services, you agree not to:"}</p>
            <p>
              {
                " 	Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us."
              }
            </p>
            <p>
              {
                " 	Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords."
              }
            </p>
            <p>
              {
                " 	Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein."
              }
            </p>
            <p>
              {
                " 	Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services."
              }
            </p>
            <p>
              {
                " 	Use any information obtained from the Services in order to harass, abuse, or harm another person."
              }
            </p>
            <p>
              {
                " 	Make improper use of our support services or submit false reports of abuse or misconduct."
              }
            </p>
            <p>
              {
                " 	Use the Services in a manner inconsistent with any applicable laws or regulations."
              }
            </p>
            <p>
              {
                " 	Engage in unauthorized framing of or linking to the Services."
              }
            </p>
            <p>
              {
                " 	Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services."
              }
            </p>
            <p>
              {
                " 	Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools."
              }
            </p>
            <p>
              {
                " 	Delete the copyright or other proprietary rights notice from any Content."
              }
            </p>
            <p>
              {
                " 	Attempt to impersonate another user or person or use the username of another user."
              }
            </p>
            <p>
              {
                ' 	Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").'
              }
            </p>
            <p>
              {
                " 	Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services."
              }
            </p>
            <p>
              {
                " 	Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you."
              }
            </p>
            <p>
              {
                " 	Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services."
              }
            </p>
            <p>
              {
                " 	Copy or adapt the Services software, including but not limited to Flash, PHP, HTML, JavaScript, or other code."
              }
            </p>
            <p>
              {
                " 	Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services."
              }
            </p>
            <p>
              {
                " 	Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software."
              }
            </p>
            <p>
              {
                " 	Use a buying agent or purchasing agent to make purchases on the Services."
              }
            </p>
            <p>
              {
                " 	Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses."
              }
            </p>
            <p>
              {
                " 	Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise."
              }
            </p>
            <p>{" 	Sell or otherwise transfer your profile."}</p>
            <p>
              {
                " 	Use the Services to advertise or offer to sell goods and services."
              }
            </p>

            <p>
              <strong>{" 9. USER GENERATED CONTRIBUTIONS"}</strong>
            </p>

            <p>
              {
                ' The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:'
              }
            </p>

            <p>
              {
                " 	The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party."
              }
            </p>
            <p>
              {
                " 	You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms."
              }
            </p>
            <p>
              {
                " 	You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms."
              }
            </p>
            <p>
              {" 	Your Contributions are not false, inaccurate, or misleading."}
            </p>
            <p>
              {
                " 	Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation."
              }
            </p>
            <p>
              {
                " 	Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us)."
              }
            </p>
            <p>
              {
                " 	Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone."
              }
            </p>
            <p>
              {
                " 	Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people."
              }
            </p>
            <p>
              {
                " 	Your Contributions do not violate any applicable law, regulation, or rule."
              }
            </p>
            <p>
              {
                " 	Your Contributions do not violate the privacy or publicity rights of any third party."
              }
            </p>
            <p>
              {
                " 	Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors."
              }
            </p>
            <p>
              {
                " 	Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap."
              }
            </p>
            <p>
              {
                " 	Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation."
              }
            </p>
            <p>
              {
                " Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services."
              }
            </p>

            <p>
              <strong>{" 10. CONTRIBUTION LICENSE"}</strong>
            </p>

            <p>
              {
                " By posting your Contributions to any part of the Services or making Contributions accessible to the Services by linking your account from the Services to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels."
              }
            </p>

            <p>
              {
                " This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions."
              }
            </p>

            <p>
              {
                " We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions."
              }
            </p>

            <p>
              {
                " We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions."
              }
            </p>

            <p>
              <strong>{" 11. GUIDELINES FOR REVIEWS"}</strong>
            </p>

            <p>
              {
                " We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative."
              }
            </p>

            <p>
              {
                " We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review."
              }
            </p>

            <p>
              <strong>{" 12. MOBILE APPLICATION LICENSE"}</strong>
            </p>

            <p>{" Use License"}</p>

            <p>
              {
                " If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App."
              }
            </p>

            <p>{" Apple and Android Devices"}</p>

            <p>
              {
                ' The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.'
              }
            </p>

            <p>
              <strong>{" 13. SOCIAL MEDIA"}</strong>
            </p>

            <p>
              {
                ' As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Services. You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services. You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.'
              }
            </p>

            <p>
              <strong>{" 14. THIRD-PARTY WEBSITES AND CONTENT"}</strong>
            </p>

            <p>
              {
                ' The Services may contain (or you may be sent via the Site or App) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.'
              }
            </p>

            <p>
              <strong>{" 15. ADVERTISERS"}</strong>
            </p>

            <p>
              {
                " We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers."
              }
            </p>

            <p>
              <strong>{" 16. SERVICES MANAGEMENT"}</strong>
            </p>

            <p>
              {
                " We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services."
              }
            </p>

            <p>
              <strong>{" 17. PRIVACY POLICY"}</strong>
            </p>

            <p>
              {
                " We care about data privacy and security. Please review our Privacy Policy: https://raizzify.com/privacy-policy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in India. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India."
              }
            </p>

            <p>
              <strong>{" 18. COPYRIGHT INFRINGEMENTS"}</strong>
            </p>

            <p>
              {
                ' We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a "Notification"). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.'
              }
            </p>

            <p>
              <strong>{" 19. TERM AND TERMINATION"}</strong>
            </p>

            <p>
              {
                " These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION."
              }
            </p>

            <p>
              {
                " If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress."
              }
            </p>

            <p>
              <strong>{" 20. MODIFICATIONS AND INTERRUPTIONS"}</strong>
            </p>

            <p>
              {
                " We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services."
              }
            </p>

            <p>
              {
                " We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith."
              }
            </p>

            <p>
              <strong>{" 21. GOVERNING LAW"}</strong>
            </p>

            <p>
              {
                " These Legal Terms shall be governed by and defined following the laws of India. Raizzify Products and Services Private Limited and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms."
              }
            </p>

            <p>
              <strong>{" 22. DISPUTE RESOLUTION"}</strong>
            </p>

            <p>{" Informal Negotiations"}</p>

            <p>
              {
                ' To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.'
              }
            </p>

            <p>{" Binding Arbitration"}</p>

            <p>
              {
                " Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3). The seat, or legal place, or arbitration shall be Bhopal, India. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of India."
              }
            </p>

            <p>{" Restrictions"}</p>

            <p>
              {
                " The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons."
              }
            </p>

            <p>{" Exceptions to Informal Negotiations and Arbitration"}</p>

            <p>
              {
                " The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court."
              }
            </p>

            <p>
              <strong>{" 23. CORRECTIONS"}</strong>
            </p>

            <p>
              {
                " There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice."
              }
            </p>

            <p>
              <strong>{" 24. DISCLAIMER"}</strong>
            </p>

            <p>
              {
                " THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE."
              }
            </p>

            <p>
              <strong>{" 25. LIMITATIONS OF LIABILITY"}</strong>
            </p>

            <p>
              {
                " IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE six (6) mONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS."
              }
            </p>

            <p>
              <strong>{" 26. INDEMNIFICATION"}</strong>
            </p>

            <p>
              {
                " You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it."
              }
            </p>

            <p>
              <strong>{" 27. USER DATA"}</strong>
            </p>

            <p>
              {
                " We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data."
              }
            </p>

            <p>
              <strong>
                {" 28. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES"}
              </strong>
            </p>

            <p>
              {
                " Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means."
              }
            </p>

            <p>
              <strong>{" 29. SMS TEXT MESSAGING"}</strong>
            </p>

            <p>{" Opting Out"}</p>

            <p>
              {
                ' If at any time you wish to stop receiving SMS messages from us, simply reply to the text with "STOP.” You may receive an SMS message confirming your opt out.'
              }
            </p>

            <p>{" Message and Data Rates"}</p>

            <p>
              {
                " Please be aware that message and data rates may apply to any SMS messages sent or received. The rates are determined by your carrier and the specifics of your mobile plan."
              }
            </p>

            <p>{" Support"}</p>

            <p>
              {
                " If you have any questions or need assistance regarding our SMS communications, please email us at privacy@raizzify.com or call at 9340151678."
              }
            </p>

            <p>
              <strong>{" 30. MISCELLANEOUS"}</strong>
            </p>

            <p>
              {
                " These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms."
              }
            </p>

            {/* <Terms title="1. Copyrights" description={copyRight} />
          <Terms title="2. Trademarks" description={trademarks} />
          <Terms title="3. Use of site content" description={useSiteContent} />
          <div className="flex flex-col gap-y-2">
           <p>{' <h2 className="text-primaryTextColor font-medium text-lg">4.User Postings</h2>'}</p>
           <p>{' <p className="text-muted-foreground">'}</p>
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
          <Terms title="9. Governing law; jurisdiction" description={governingLaw} /> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen py-14 font-manrope">
        <div className="flex max-w-screen-sm flex-col gap-y-4">
          <p className="text-sm font-light">Last Updated on {date.getDate()}</p>
          <h1 className="text-4xl font-semibold text-primaryTextColor">
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-y-10 text-muted-foreground font-light">
            {/* <p>We, the Inception Collective, and its subsidiaries and affiliates (collectively, “Inception Collective”,”IC”, “us,” or “we”) understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data. This privacy notice describes how we handle and protect your personal data (the “Privacy Notice”) when we collect it through Inception Collectives websites, applications, and digital assets (collectively, our “Sites”) and through our externally facing business activities, such as service offerings, events, surveys, and communications, when we interact with you and collect data from you for use by and on behalf of Inception Collective (i.e., when IC is acting as a data controller or similar term under applicable privacy law).</p> */}
            Last updated July 23, 2024
            <p>
              {
                'This privacy notice for Raizzify Products and Services Private Limited (doing business as Raizzify Business) ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:'
              }
            </p>
            <p>
              {
                "	Visit our website at http://www.raizzify.com, or any website of ours that links to this privacy notice"
              }
            </p>
            <p>
              {
                "	Download and use our mobile application (Raizzify ), or any other application of ours that links to this privacy notice"
              }
            </p>
            <p>
              {
                "	Engage with us in other related ways, including any sales, marketing, or events"
              }
            </p>
            <p>
              {
                "Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at privacy@raizzify.com."
              }
            </p>
            <p className="font-bold">SUMMARY OF KEY POINTS</p>
            <p>
              {
                "This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for."
              }
            </p>
            <p>
              {
                "What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us."
              }
            </p>
            <p>
              {
                "Do we process any sensitive personal information? We do not process sensitive personal information."
              }
            </p>
            <p>
              {
                "Do we collect any information from third parties? We do not collect any information from third parties."
              }
            </p>
            <p>
              {
                "How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information."
              }
            </p>
            <p>
              {
                "In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share your personal information."
              }
            </p>
            <p>
              {
                "How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe."
              }
            </p>
            <p>
              {
                "What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights."
              }
            </p>
            <p>
              {
                "How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws."
              }
            </p>
            <p>
              {
                "Want to learn more about what we do with any information we collect? Review the privacy notice in full."
              }
            </p>
            <p className="font-bold">TABLE OF CONTENTS</p>
            <p>
              <strong>1. WHAT INFORMATION DO WE COLLECT?</strong>
            </p>
            <p>
              <strong>2. HOW DO WE PROCESS YOUR INFORMATION?</strong>
            </p>
            <p>
              <strong>
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </strong>
            </p>
            <p>
              <strong>4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</strong>
            </p>
            <p>
              <strong>
                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </strong>
            </p>
            <p>
              <strong>
                6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </strong>
            </p>
            <p>
              <strong>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong>
            </p>
            <p>
              <strong>8. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
            </p>
            <p>
              <strong>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong>
            </p>
            <p>
              <strong>10. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
            </p>
            <p>
              <strong>11. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
            </p>
            <p>
              <strong>12. DO WE MAKE UPDATES TO THIS NOTICE?</strong>
            </p>
            <p>
              <strong>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>
            </p>
            <p>
              <strong>
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </strong>
            </p>
            <p className="font-bold">{"1. WHAT INFORMATION DO WE COLLECT?"}</p>
            <p>{"Personal information you disclose to us"}</p>
            <p>
              {
                "In Short: We collect personal information that you provide to us."
              }
            </p>
            <p>
              {
                "We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us."
              }
            </p>
            <p>
              {
                "Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:"
              }
            </p>
            <p>{"	names"}</p>
            <p>{"	phone numbers"}</p>
            <p>{"	email addresses"}</p>
            <p>{"	billing addresses"}</p>
            <p>{"	usernames"}</p>
            <p>{"	mailing addresses"}</p>
            <p>{"	passwords"}</p>
            <p>{"	contact preferences"}</p>
            <p>{"	contact or authentication data"}</p>
            <p>{"	debit/credit card numbers"}</p>
            <p>{"	address"}</p>
            <p>{"	pincode"}</p>
            <p>{"	state"}</p>
            <p>{"	years of experience"}</p>
            <p>{"	geolocation"}</p>
            <p>{"	upi payment id"}</p>
            <p>{"	image of business"}</p>
            <p>{"	business hours"}</p>
            <p>{"	date of birth"}</p>
            <p>
              {
                "Sensitive Information. We do not process sensitive information."
              }
            </p>
            <p>
              {
                "Payment Data. We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Razorpay. You may find their privacy notice link(s) here: https://razorpay.com/privacy/."
              }
            </p>
            <p>
              {
                'Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.'
              }
            </p>
            <p>
              {
                "Application Data. If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:"
              }
            </p>
            <p>
              {
                "	Geolocation Information. We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your devices settings."
              }
            </p>
            <p>
              {
                "	Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile devices camera, reminders, geolocation, sms messages, and other features. If you wish to change our access or permissions, you may do so in your device settings."
              }
            </p>
            <p>
              {
                "	Mobile Device Data. We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed."
              }
            </p>
            <p>
              {
                "	Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your devices settings."
              }
            </p>
            <p>
              {
                "This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes."
              }
            </p>
            <p>
              {
                "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information."
              }
            </p>
            <p>{"Information automatically collected"}</p>
            <p>
              {
                "In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services."
              }
            </p>
            <p>
              {
                "We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes."
              }
            </p>
            <p>
              {
                "Like many businesses, we also collect information through cookies and similar technologies."
              }
            </p>
            <p>{"The information we collect includes:"}</p>
            <p>
              {
                '	Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).'
              }
            </p>
            <p>
              {
                "	Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information."
              }
            </p>
            <p>
              {
                "	Location Data. We collect location data such as information about your device location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services."
              }
            </p>
            <p>{"Google API"}</p>
            <p>
              {
                "Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements."
              }
            </p>
            <p className="font-bold">{"2. HOW DO WE PROCESS YOUR INFORMATION?"}</p>
            <p>
              {
                "In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent."
              }
            </p>
            <p>
              {
                "We process your personal information for a variety of reasons, depending on how you interact with our Services, including:"
              }
            </p>
            <p>
              {
                "	To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order."
              }
            </p>
            <p>
              {
                "	To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service."
              }
            </p>
            <p>
              {
                "	To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service."
              }
            </p>
            <p>
              {
                "	To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information."
              }
            </p>
            <p>
              {
                "	To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services."
              }
            </p>
            <p>
              {
                "	To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user."
              }
            </p>
            <p>
              {
                "	To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services."
              }
            </p>
            <p>
              {
                '	To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.'
              }
            </p>
            <p>
              {
                "	To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more."
              }
            </p>
            <p>
              {
                "	To post testimonials. We post testimonials on our Services that may contain personal information."
              }
            </p>
            <p>
              {
                "	To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention."
              }
            </p>
            <p>
              {
                "	To administer prize draws and competitions. We may process your information to administer prize draws and competitions."
              }
            </p>
            <p>
              {
                "	To evaluate and improve our Services, products, marketing, and your experience. We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience."
              }
            </p>
            <p>
              {
                "	To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them."
              }
            </p>
            <p>
              {
                "	To determine the effectiveness of our marketing and promotional campaigns. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you."
              }
            </p>
            <p>
              {
                "	To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights."
              }
            </p>
            <p className="font-bold">
              {"3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"}
            </p>
            <p>
              {
                "In Short: We may share information in specific situations described in this section and/or with the following categories of third parties."
              }
            </p>
            <p>
              {
                'Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work.'
              }
            </p>
            <p>
              {
                "The categories of third parties we may share personal information with are as follows:"
              }
            </p>
            <p>{"	Payment Processors"}</p>
            <p>{"	Ad Networks"}</p>
            <p>{"	Affiliate Marketing Programs"}</p>
            <p>{"	AI Platforms"}</p>
            <p>{"	Cloud Computing Services"}</p>
            <p>{"	Data Analytics Services"}</p>
            <p>{"	Data Storage Service Providers"}</p>
            <p>{"	Finance & Accounting Tools"}</p>
            <p>{"	Order Fulfillment Service Providers"}</p>
            <p>{"	Performance Monitoring Tools"}</p>
            <p>{"	Product Engineering & Design Tools"}</p>
            <p>{"	Retargeting Platforms"}</p>
            <p>{"	Sales & Marketing Tools"}</p>
            <p>{"	Social Networks"}</p>
            <p>{"	Testing Tools"}</p>
            <p>{"	User Account Registration & Authentication Services"}</p>
            <p>{"	Website Hosting Service Providers"}</p>
            <p>{"	Communication & Collaboration Tools"}</p>
            <p>
              {
                "We also may need to share your personal information in the following situations:"
              }
            </p>
            <p>
              {
                "	Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company."
              }
            </p>
            <p>
              {
                '	When we use Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). We use certain Google Maps Platform APIs to retrieve certain information when you make location-specific requests. This includes: Geolocation; __________; and other similar information. A full list of what we use information for can be found in this section and in the previous section titled "HOW DO WE PROCESS YOUR INFORMATION?" We obtain and store on your device ("cache") your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document. The Google Maps Platform APIs that we use store and access cookies and other information on your devices. If you are a user currently in the European Economic Area (EU countries, Iceland, Liechtenstein, and Norway) or the United Kingdom, please take a look at our Cookie Notice.'
              }
            </p>
            <p>
              {
                "	Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us."
              }
            </p>
            <p>
              {
                "	Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions."
              }
            </p>
            <p>
              {
                "	Other Users. When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile."
              }
            </p>
            <p>
              {
                '	Offer Wall. Our application(s) may display a third-party hosted "offer wall." Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.'
              }
            </p>
            <p className="font-bold">{"4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?"}</p>
            <p>
              {
                "In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services."
              }
            </p>
            <p>
              {
                "The Services, including our offer wall, may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions."
              }
            </p>
            <p className="font-bold">{"5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"}</p>
            <p>
              {
                "In Short: We may use cookies and other tracking technologies to collect and store your information."
              }
            </p>
            <p>
              {
                "We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions."
              }
            </p>
            <p>
              {
                "We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites."
              }
            </p>
            <p>
              {
                "pecific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice."
              }
            </p>
            <p>{"Google Analytics"}</p>
            <p>
              {
                "We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Google Display Network Impressions Reporting, Remarketing with Google Analytics and Google Analytics Demographics and Interests Reporting. To opt out of being tracked by Google Analytics across the Services, visit https://tools.google.com/dlpage/gaoptout. You can opt out of Google Analytics Advertising Features through Ads Settings and Ad Settings for mobile apps. Other opt out means include http://optout.networkadvertising.org/ and http://www.networkadvertising.org/mobile-choice. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page."
              }
            </p>
            <p className="font-bold">{"6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?"}</p>
            <p>
              {
                "In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies."
              }
            </p>
            <p>
              {
                'As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this privacy notice govern your use of the AI Products within our Services.'
              }
            </p>
            <p>{"Our AI Products"}</p>
            <p>{"Our AI Products are designed for the following functions:"}</p>
            <p>{"	Image analysis"}</p>
            <p>{"	AI applications"}</p>
            <p>{"	Machine learning models"}</p>
            <p>{"How We Process Your Data Using AI"}</p>
            <p>
              {
                "All personal information processed using our AI Products is handled in line with our privacy notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data safety."
              }
            </p>
            <p>{"How to Opt Out"}</p>
            <p>
              {
                "We believe in giving you the power to decide how your data is used. To opt out, you can:"
              }
            </p>
            <p>{"	Contact us using the contact information provided"}</p>
            <p className="font-bold">{"7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?"}</p>
            <p>
              {
                "In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you."
              }
            </p>
            <p>
              {
                "Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform."
              }
            </p>
            <p>
              {
                "We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps."
              }
            </p>
            <p className="font-bold">{"8. HOW LONG DO WE KEEP YOUR INFORMATION?"}</p>
            <p>
              {
                "In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law."
              }
            </p>
            <p>
              {
                "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than twelve (12) months past the start of the idle period of the user account."
              }
            </p>
            <p>
              {
                "When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible."
              }
            </p>
            <p>{"9. HOW DO WE KEEP YOUR INFORMATION SAFE?"}</p>
            <p>
              {
                "In Short: We aim to protect your personal information through a system of organizational and technical security measures."
              }
            </p>
            <p>
              {
                "We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment."
              }
            </p>
            <p className="font-bold">{"10. WHAT ARE YOUR PRIVACY RIGHTS?"}</p>
            <p>
              {
                "In Short:  You may review, change, or terminate your account at any time, depending on your country, province, or state of residence."
              }
            </p>
            <p>
              {
                'Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.'
              }
            </p>
            <p>
              {
                "However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent."
              }
            </p>
            <p>
              {
                'Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.'
              }
            </p>
            <p>{"Account Information"}</p>
            <p>
              {
                "If you would at any time like to review or change the information in your account or terminate your account, you can:"
              }
            </p>
            <p>
              {"	Log in to your account settings and update your user account."}
            </p>
            <p>{"	Contact us using the contact information provided."}</p>
            <p>
              {
                "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements."
              }
            </p>
            <p>
              {
                "Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. You may also opt out of interest-based advertising by advertisers on our Services."
              }
            </p>
            <p>
              {
                "If you have questions or comments about your privacy rights, you may email us at privacy@raizzify.com."
              }
            </p>
            <p className="font-bold">{"11. CONTROLS FOR DO-NOT-TRACK FEATURES"}</p>
            <p>
              {
                'Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.'
              }
            </p>
            <p className="font-bold">{"12. DO WE MAKE UPDATES TO THIS NOTICE?"}</p>
            <p>
              {
                "In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws."
              }
            </p>
            <p>
              {
                'We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this privacy notice. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.'
              }
            </p>
            <p className="font-bold">{"13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"}</p>
            <p>
              {
                "If you have questions or comments about this notice, you may email us at privacy@raizzify.com or contact us by post at:"
              }
            </p>
            <p>{"Raizzify Products and Services Private Limited"}</p>
            <p>{"10-11 Govind Nagar"}</p>
            <p>{"Mandsaur, Madhya Pradesh 458001"}</p>
            <p>{"India"}</p>
            <p className="font-bold">
              {
                "14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
              }
            </p>
            <p>
              {
                "Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request."
              }
            </p>
            {/* 
                    <ul className="list-disc ml-8">
                        <li>Our Recruiting Privacy Notice, if you are applying for a position with Inception Collective.</li>
                        <li>Our Alumni Privacy Notice for Inception Collective alumni.</li>
                        <li>Our Solutions Privacy Notice, if you are using Inception Collective solutions on your employer’s behalf.</li>
                    </ul>

                    <p>If you are an employee of an Inception Collective client or a Inception Collective service provider, we may receive your personal data from your employer. Our use of your personal data is governed by our engagement agreement with your employer.</p>
                    <p>If you are a California resident, please see our specific privacy information for you below.</p>
                    <p>You are not required to share your personal data with us, but failing to do so may result in us being unable to properly provide you with our full range of services or a good user experience with our solutions, websites services or newsletters.</p>
                    <p>Please see our terms of use for more information about other terms and policies applicable to the use of our Sites.</p> */}
          </div>

          <div></div>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen font-manrope">
        <div className="flex max-w-screen-sm flex-col gap-y-4">
          <p className="text-sm font-light">Last Updated on {date.getDate()}</p>
          <h1 className="text-4xl font-semibold text-primaryTextColor">
            Refund and Cancellation Policy
          </h1>

          <div className="flex flex-col gap-y-4 text-muted-foreground font-light">
            <p className="font-bold">{"RETURN POLICY"}</p>

            <p>{"Last updated July 24, 2024"}</p>

            <p>{"REFUNDS"}</p>

            <p>{"All sales are final and no refund will be issued."}</p>

            <p className="font-bold">{"QUESTIONS"}</p>

            <p>
              {
                "If you have any questions concerning our return policy, please contact us at:"
              }
            </p>

            <p>{"customerservice@raizzify.com"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TermsService;
