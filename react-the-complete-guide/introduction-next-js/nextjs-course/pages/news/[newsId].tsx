import { useRouter } from "next/router";

export default function NewsDetailsPage() {
    const router = useRouter();
    console.log(router.query.newsId);

    return <h1>The news details page</h1>;
}
