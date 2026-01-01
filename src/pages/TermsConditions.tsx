import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="section-padding pt-32">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span className="font-body text-sm tracking-premium">Back to Home</span>
            </Link>

            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
              Terms & Conditions
            </h1>

            <div className="prose prose-lg max-w-none font-body text-muted-foreground space-y-8">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Welcome to Celestial Visionn!</strong>
              </p>

              <p className="text-lg leading-relaxed">
                These terms and conditions outline the rules and regulations for the use of the Celestial Visionn website and its services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Celestial Visionn if you do not agree to all of the terms stated on this page.
              </p>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">1. Cookies</h2>
                <p>
                  The website uses cookies to help personalize your online experience. By accessing Celestial Visionn, you agree to the use of required cookies. Cookies are text files placed on your device by a web server and cannot be used to run programs or deliver viruses.
                </p>
                <p>
                  Cookies help us improve functionality, user experience, and analyze site traffic. Some cookies are essential for website operation and do not require consent, while optional cookies may be declined. Third-party cookies may also be used through integrated services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">2. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise stated, Celestial Visionn and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may access the content for personal use only, subject to these terms.
                </p>
                <p>
                  You must not copy, republish, sell, rent, sub-license, reproduce, duplicate, or redistribute any content from Celestial Visionn without written permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">3. User-Generated Content</h2>
                <p>
                  Parts of the website may allow users to post comments, reviews, or messages. Celestial Visionn does not pre-screen or review user content before publication. Such content reflects the views of the individual user and not of Celestial Visionn. We reserve the right to monitor, edit, or remove any content that violates these terms or is offensive, inappropriate, or harmful.
                </p>
                <p>
                  By posting content, you confirm that you have the right to do so, that the content does not violate any intellectual property rights, does not contain defamatory, unlawful, abusive, or offensive material, and is not used for promotional, misleading, or illegal purposes. You grant Celestial Visionn a non-exclusive license to use, reproduce, modify, and distribute your content in any media.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">4. Links and Third-Party Content</h2>
                <p>
                  Certain organizations such as government agencies, search engines, news organizations, and online directories may link to our website without prior approval, provided such links are not misleading and do not falsely imply endorsement. Other organizations may request permission to link to our website by contacting us via email. Use of Celestial Visionn branding, logos, or artwork for linking requires written approval.
                </p>
                <p>
                  We are not responsible for the content appearing on third-party websites that link to or from our site. You agree to protect and defend Celestial Visionn against any claims arising from your website content or your use of our content.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">5. Modifications to Terms</h2>
                <p>
                  We reserve the right to request the removal of any link to our website and to update these terms at any time. Continued use of the website indicates acceptance of any updated terms.
                </p>
                <p>
                  If you find any link on our website offensive, you may contact us, and we will review the request, though we are not obligated to act upon it.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">6. Disclaimer of Warranties</h2>
                <p>
                  We do not guarantee the accuracy, completeness, or availability of the information on this website. Content and services are provided for general guidance, spiritual insight, and personal development purposes only.
                </p>
                <p>
                  <strong className="text-foreground">Tarot readings, crystal healing sessions, and related services are not a substitute for medical, legal, psychological, or financial advice.</strong> Users are solely responsible for decisions made based on the services provided.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Celestial Visionn and its owner Mansi Saxena shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of the website or services.
                </p>
                <p>
                  As long as the website and services are provided free of charge or as booked by users, we will not be liable for any loss or damage of any nature.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl text-foreground">8. Contact Us</h2>
                <p>
                  If you have any questions regarding these Terms and Conditions, you may contact us at:
                </p>
                <p className="text-foreground font-medium">
                  celestialvisionwithmansi@gmail.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
