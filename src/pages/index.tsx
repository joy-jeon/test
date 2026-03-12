import Link from 'next/link'; 

export default function PublishIndex() {
  return (
    <div className="p-10">
      <h1 className="text-da-h1 font-bold mb-4">Discovery Agent Publishing List</h1>
      <ul className="list-disc pl-5">
        <li><Link href="/preview/components">컴포넌트 가이드 (Atoms/Molecules)</Link></li>
        <li><Link href="/preview/layout">전체 레이아웃 프리뷰</Link></li>
        {/* 완성된 페이지들 링크 추가 */}
      </ul>
    </div>
  );
}