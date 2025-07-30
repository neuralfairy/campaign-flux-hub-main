import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-brand-deep-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Nicoledandrea
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Driving high-impact promotional campaigns that deliver measurable ROI and accelerate B2B growth.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Promotional Campaigns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">A/B Testing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lead Generation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics & Reporting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CRM Integration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm">
            © 2024 Nicoledandreaconsulting Solutions. All rights reserved.
          </div>
          
          <div className="text-gray-300 text-sm">
            <a 
              href="https://salescentri.com?utm_source=nicoledandreaconsulting.com&utm_medium=footer&utm_campaign=partner_network"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;