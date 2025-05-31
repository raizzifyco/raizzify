const ContactUs = () => {
  const date = new Date();
  return (
    <div className="flex items-center justify-center min-h-screen py-14 font-manrope">
      <div className="flex max-w-screen-sm flex-col gap-y-4">
        <p className="text-sm font-light">Last Updated on {date.getDate()}</p>
        <h1 className="text-4xl font-semibold text-primaryTextColor">
          Contact Us
        </h1>

        <div className="flex flex-col gap-y-10 text-muted-foreground font-light">
          {/* <p>We, the Inception Collective, and its subsidiaries and affiliates (collectively, “Inception Collective”,”IC”, “us,” or “we”) understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data. This privacy notice describes how we handle and protect your personal data (the “Privacy Notice”) when we collect it through Inception Collectives websites, applications, and digital assets (collectively, our “Sites”) and through our externally facing business activities, such as service offerings, events, surveys, and communications, when we interact with you and collect data from you for use by and on behalf of Inception Collective (i.e., when IC is acting as a data controller or similar term under applicable privacy law).</p> */}
          <div className=" font-medium . ">
            Last updated on 31-07-2024 15:03:02 You may contact us using the
            information below: Merchant Legal entity name: RAIZZ PRODUCTS AND
            SERVICES PRIVATE LIMITED Registered Address: 10 11 Rani Govind
            Nagar, Mandsaur, Madhya Pradesh, PIN: 458001 Operational Address: 10
            11 Rani Govind Nagar, Mandsaur, Madhya Pradesh, PIN: 458001
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
  
  <a
    href="https://wa.me/9340151678"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-105"
  >
    <img
      src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
      alt="WhatsApp"
    />
  </a>

  
  <a
    href="mailto:nikhil.raizada@raizzify.com"
    className="transition transform hover:scale-105"
  >
    <img
      src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red"
      alt="Gmail"
    />
  </a>
</div>

          </div>

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
  );
};
export default ContactUs;
