import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';

export default function Privacy() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, margin: '-50px' });

  const sections = [
    {
      title: 'Personal Information We Collect',
      content: [
        {
          subtitle: 'Device Information',
          text: 'When you visit the Celestial Visionn website, certain information is collected automatically, including:',
          items: [
            'Device information (browser type, IP address, time zone)',
            'Cookies and usage data',
            'Pages viewed, time spent, and referral sources',
            'Interaction patterns on the website',
          ],
        },
        {
          subtitle: 'Voluntarily Provided Information',
          text: 'Additionally, when you choose to use our services or communicate with us, we may collect personal data you voluntarily provide, including but not limited to:',
          items: [
            'Full Name',
            'Email Address',
            'Phone Number',
            'City / Country',
            'Payment and transaction details',
            'Any information shared during consultations or inquiries',
          ],
        },
      ],
    },
    {
      title: 'Why We Process Your Data',
      content: [
        {
          text: 'Your data is processed strictly for legitimate and necessary purposes, including:',
          items: [
            'Delivering Tarot and Crystal Healing services',
            'Managing bookings and communication',
            'Improving website performance and user experience',
            'Maintaining website security and preventing misuse',
            'Fulfilling legal and regulatory requirements',
          ],
          note: 'We collect only the minimum data required to provide our services effectively.',
        },
      ],
    },
    {
      title: 'Your Choices & Access',
      content: [
        {
          items: [
            'You may browse the website without revealing personal identity.',
            'Some features such as consultations, bookings, newsletters, or contact forms require personal information.',
            'If you choose not to provide certain details, some services may not be accessible.',
          ],
          note: 'For any clarification regarding required information, contact: celestialvisionn@gmail.com',
        },
      ],
    },
    {
      title: 'Your Rights',
      content: [
        {
          text: 'Depending on your location and applicable laws, you have the right to:',
          items: [
            'Access your personal data',
            'Request correction or updates',
            'Request deletion of your data',
            'Restrict or object to data processing',
            'Request data portability',
            'Withdraw consent at any time',
          ],
          note: 'To exercise these rights, please contact us.',
        },
      ],
    },
    {
      title: 'Links to External Websites',
      content: [
        {
          text: 'Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.',
          items: [],
        },
      ],
    },
    {
      title: 'Information Security',
      content: [
        {
          text: 'We implement appropriate administrative, technical, and physical safeguards to protect your data.',
          items: [],
          note: 'No online transmission is 100% secure.',
        },
      ],
    },
    {
      title: 'Legal Disclosure',
      content: [
        {
          text: 'We may disclose your information when required by law or to protect our rights and users.',
          items: [],
        },
      ],
    },
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream pt-12 md:pt-20 lg:pt-28">

        {/* Header */}
        <section className="py-6 md:py-10 lg:py-14">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-center space-y-4"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-forest tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Celestial Visionn is owned and operated by Mansi Saxena, who acts as the data controller of your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-6 md:py-8 lg:py-10">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="max-w-3xl mx-auto space-y-5 md:space-y-6 text-center md:text-left"
            >
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how we collect, use, and protect your personal data. By using our website, you agree to this policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to safeguarding your information with the highest standards of confidentiality and security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section ref={contentRef} className="py-8 md:py-10 lg:py-14">
          <div className="container-narrow space-y-8 md:space-y-10 lg:space-y-12">

            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className="rounded-2xl p-5 md:p-7 lg:p-10 bg-cream/70 backdrop-blur-sm shadow-sm border border-sage/10"
              >
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl text-forest mb-5 tracking-tight">
                  {section.title}
                </h2>

                <div className="space-y-5">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="space-y-4">
                      {item.subtitle && (
                        <h3 className="font-heading text-lg md:text-xl text-sage tracking-tight">
                          {item.subtitle}
                        </h3>
                      )}

                      {item.text && (
                        <p className="text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      )}

                      {item.items.length > 0 && (
                        <ul className="space-y-2 ml-4 md:ml-6">
                          {item.items.map((listItem, listIdx) => (
                            <li key={listIdx} className="flex gap-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                              <span className="text-gold font-bold">•</span>
                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.note && (
                        <p className="pt-4 text-sm md:text-base text-sage italic border-t border-sage/20">
                          {item.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* Contact */}
        <section className="py-10 md:py-14 lg:py-20 border-t border-sage/20">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="rounded-2xl p-6 md:p-10 bg-cream/70 backdrop-blur-sm shadow-sm border border-sage/10 text-center max-w-3xl mx-auto space-y-4"
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-forest">
                Contact Information
              </h2>

              <p className="text-muted-foreground">
                For questions regarding this policy, contact:
              </p>

              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold text-forest text-lg">Mansi Saxena</p>
                <p>Celestial Visionn</p>
                <p className="flex items-center justify-center gap-2">
                  <span>📧</span>
                  <a href="mailto:celestialvisionn@gmail.com" className="hover:text-gold transition-colors">
                    celestialvisionn@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <FooterSection />
    </>
  );
}
