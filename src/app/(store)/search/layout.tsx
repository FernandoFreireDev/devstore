import { ReactNode, Suspense } from 'react'

export default function SearchLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>
}
