import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <Link href="/bulkOrders">
        <div>Go to Bulk Orders Page</div>
      </Link>
      <Link href="/payment">
        <div>Go to Payment Success Page</div>
      </Link>
      <Link href="/popper">
        <div>Go to Popper Page</div>
      </Link>
      <Link href="/paymentSummary">
        <div>Go to Payment Summary</div>
      </Link>
      <Link href="/scrollAnimation">
        <div>Go to Scroll Animation Page</div>
      </Link>
    </div>
  );
}
