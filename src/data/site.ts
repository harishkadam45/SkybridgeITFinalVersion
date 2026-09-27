export const SITE = {
	name: 'SkyBridge IT Consulting',
	legalName: 'SkyBridge IT Consulting LLC',
	url: 'https://skybridgeit.com',
	tagline: 'White-Label Web Development Partner for Agencies',
	description:
		'SkyBridge IT Consulting is a full-scale digital engineering company. Since 2005 we have delivered custom web development, mobile apps, software, WordPress, AI automation and white-label development services to agencies and businesses worldwide.',
	email: 'info@skybridgeit.com',
	phone: '(267) 388-9414',
	phoneHref: 'tel:+12673889414',
	whatsapp:
		'https://api.whatsapp.com/send/?phone=%2B919966276640&text=Hello%20SkyBridge%20IT%20Consulting&type=phone_number&app_absent=0',
	whatsappNumber: '+91 99662 76640',
	linkedin: 'https://linkedin.com/in/skybridgeitconsulting/',
	youtube: 'https://www.youtube.com/@SkyBridgeITConsulting',
	calendly: 'https://calendly.com/skybridgeitconsulting/15min?back=1&month=2026-03',
	addresses: [
		{ label: 'US Office (NY)', line: '85 Blackford Ave, Staten Island, NY 10302' },
		{ label: 'US Office (PA)', line: '1266 College Dr, Latrobe, PA 15650' },
	],
	founded: 2005,
	isoLabel: 'ISO 9001:2015 Certified',
	isoPath: '/iso-certification/',
} as const;

export interface NavLink {
	label: string;
	href: string;
	children?: NavLink[];
}

export const NAV = [
	{ label: 'About us', href: '/about-us/' },
	{
		label: 'Services',
		href: '/services/',
		children: [
			{ label: 'Backend Technologies', href: '/backend-custom-programming-services/' },
			{ label: 'Front End Technologies', href: '/frontend-development-technologies/' },
			{ label: 'Mobile App Development', href: '/mobile-app-development/' },
			{ label: 'Custom Web Applications', href: '/custom-web-application-development/' },
			{ label: 'Software Development', href: '/software-development/' },
			{
				label: 'Bulk WhatsApp Marketing',
				href: '/bulk-whatsapp-marketing-services-for-us-small-medium-businesses/',
			},
			{ label: 'Shopify Development Services', href: '/shopify-development-services/' },
		],
	},
	{ label: 'Our Team', href: '/our-team/' },
	{
		label: 'AI Services',
		href: '/ai-ugc-content-packages-for-advertising-marketing-agencies/',
		children: [
			{ label: 'AI UGC Video Production', href: '/ai-ugc-video-production-workflow/' },
			{
				label: 'AI UGC Content Packages',
				href: '/ai-ugc-content-packages-for-advertising-marketing-agencies/',
			},
			{ label: 'AI Automation Services', href: '/ai-automation-ai/' },
		],
	},
	{
		label: 'Go High Level',
		href: '/gohighlevel-crm-automation-services-for-small-medium-businesses/',
	},
	{
		label: 'WordPress',
		href: '/wordpress-website-development-packages/',
		children: [
			{ label: 'WordPress Website Development Packages', href: '/wordpress-website-development-packages/' },
			{ label: 'WordPress Maintenance Packages', href: '/wordpress-maintenance-packages/' },
			{ label: 'WordPress Speed Optimization Packages', href: '/wordpress-speed-optimization-packages/' },
			{ label: 'WordPress SEO Packages', href: '/wordpress-seo-packages/' },
			{ label: 'WooCommerce Development Packages', href: '/woocommerce-development-packages/' },
			{ label: 'WordPress AI Automation Services', href: '/wordpress-ai-automation-services/' },
			{ label: 'Complete WordPress Development Workflow', href: '/complete-wordpress-development-workflow/' },
		],
	},
	{ label: 'Gaming App', href: '/gaming-app/' },
	{ label: 'Website Maintenance', href: '/website-maintenance/' },
	{ label: 'Contact us', href: '/contact-us/' },
] satisfies NavLink[];