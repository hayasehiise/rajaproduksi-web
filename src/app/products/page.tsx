'use client'
import dynamic from "next/dynamic"
import { Suspense } from "react"
import LoadingPage from './loading'

const SectionProductList = dynamic(() => import('@/components/page/products/sectionProductList'))

export default function Products() {
    return (
        <>
        <Suspense fallback={<LoadingPage />}>
            <SectionProductList />
        </Suspense>
        </>
    )
}