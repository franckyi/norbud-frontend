import ContactForm from "./contact-form";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ContactSectionProps } from "./contact-section";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function ContactSection({ companyInfo }: ContactSectionProps) {
  return (
    <section className="bg-gray-100 mt-16 py-24 px-4 md:px-0">
      <div className="max-w-6xl mx-auto md:flex items-start">
        <div className="md:w-1/2 mb-8 text-stone-800">
          {companyInfo.fullName && (
            <p className="mb-4 text-lg">{companyInfo.fullName}</p>
          )}
          <div className="hover:cursor-zoom-in">
            {companyInfo.street && companyInfo.cap && companyInfo.city && (
              <p className="hover:text-2xl">
                Adres:{" "}
                {`${companyInfo.street}, ${companyInfo.cap} ${companyInfo.city}`}
              </p>
            )}
            {companyInfo.nip && (
              <p className="hover:text-2xl">NIP: {companyInfo.nip}</p>
            )}
            {companyInfo.regon && (
              <p className="hover:text-2xl">Regon: {companyInfo.regon}</p>
            )}
            {companyInfo.krs && (
              <p className="hover:text-2xl">KRS: {companyInfo.krs}</p>
            )}
            {companyInfo.bank.name && companyInfo.bank.number && (
              <p className="hover:text-2xl">
                Przelewy: {companyInfo.bank.name} {companyInfo.bank.number}
              </p>
            )}
          </div>
          {companyInfo.email && (
            <a href={`mailto:${companyInfo.email}`} className="block mt-4">
              <EnvelopeIcon className="h-5 w-5 text-stone-500 inline mr-2" />
              {companyInfo.email}
            </a>
          )}
          {companyInfo.facebook && (
            <a
              href={companyInfo.facebook}
              title="Facebook link"
              className="block "
            >
              <FacebookIcon className="h-5 w-5 text-stone-500 inline mr-2" />{" "}
              Odwiedź naszą stronę na FB!
            </a>
          )}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;