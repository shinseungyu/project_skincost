import type { Metadata } from 'next';
import Link from 'next/link';
import postsData from '@/data/posts.json';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}): Promise<Metadata> {
  const { id } = await searchParams;
  const post = id ? postsData.find((p) => p.id === parseInt(id)) : null;

  if (post) {
    return {
      title: post.title,
      description: post.summary,
      alternates: { canonical: `/board?id=${post.id}` },
      openGraph: { title: post.title, description: post.summary, type: 'article' },
      twitter: { title: post.title, description: post.summary },
    };
  }

  return {
    title: '피부미용학원 정보 게시판 — 수강료·국비지원·자격증 최신 정보',
    description: '피부미용학원 수강료, 피부관리사 자격증, 국비지원 신청 방법, 에스테틱·성장인자·홈에스테틱 과정 정보를 최신순으로 확인하세요.',
    alternates: { canonical: '/board' },
  };
}

export default function BoardPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  return <BoardContent searchParams={searchParams} />;
}

async function BoardContent({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const selectedId = id ? parseInt(id) : null;
  const selectedPost = selectedId ? postsData.find((p) => p.id === selectedId) : null;

  if (selectedPost) {
    return (
      <main style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: 100 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 1.5rem' }}>
          <Link href="/board" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: 'var(--primary)', marginBottom: 32 }}>
            ← 목록으로 돌아가기
          </Link>
          <article>
            <header>
              <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{selectedPost.category}</span>
              <h1 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, marginTop: 12, marginBottom: 16, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                {selectedPost.title}
              </h1>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--border-color)' }}>
                <time dateTime={selectedPost.date} style={{ fontSize: 13, color: 'var(--text-muted)' }}>{selectedPost.date}</time>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)', background: 'var(--primary-light)', padding: '2px 10px', borderRadius: 50 }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            <div style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
              {selectedPost.content}
            </div>
          </article>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: 100 }}>
      <div style={{ background: 'linear-gradient(135deg, #FAF3F6 0%, #F5E8ED 100%)', borderBottom: '1px solid var(--border-color)', padding: '60px 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>정보 게시판</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>피부미용학원 정보 게시판</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 560 }}>
            피부미용학원 수강료, 피부관리사 자격증, 국비지원, 에스테틱·성장인자·홈에스테틱 과정 정보를 확인하세요.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 1.5rem' }}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 20, listStyle: 'none' }}>
          {postsData.map((post) => (
            <li key={post.id}>
              <article style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, overflow: 'hidden', transition: 'all 0.2s' }}>
                <Link href={`/board?id=${post.id}`} style={{ display: 'block', padding: '28px 32px', textDecoration: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <span style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>
                        {post.category}
                      </span>
                      <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.4 }}>{post.title}</h2>
                      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{post.summary}</p>
                    </div>
                    <time dateTime={post.date} style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, flexShrink: 0 }}>{post.date}</time>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 16 }}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', background: 'var(--bg-main)', padding: '2px 10px', borderRadius: 50, border: '1px solid var(--border-color)' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
