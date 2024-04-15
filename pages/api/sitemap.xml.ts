// Imports
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const [pagesSlugs] = await Promise.all([getAllPagesSlugs()]);

	/* Pages, News Insights Posts Arrays */
	const pagesLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: any = [...pagesLinks];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};
