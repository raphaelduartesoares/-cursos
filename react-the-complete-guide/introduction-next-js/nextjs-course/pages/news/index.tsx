import Link from "next/link";
import { Fragment } from "react";

export default function NewsPage() {
    return (
        <Fragment>
            <h1>The news page</h1>
            <ul>
                <li>
                    <Link href="/news/some-id">Some id article</Link>
                </li>
                <li>
                    <Link href="/news/other-id">Other id article</Link>
                </li>
            </ul>
        </Fragment>
    );
}
