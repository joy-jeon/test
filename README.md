# Discovery Agent Frontend

본 문서는 Discovery Agent 프론트엔드 프로젝트의 표준 아키텍처, 폴더 구조, 컴포넌트 설계 원칙을 정의한다.

## 1. 기술 스택

- Next.js (Pages Router)
- React + TypeScript
- Tailwind CSS
- class-variance-authority (CVA)

## 2. 아키텍처 원칙

본 프로젝트는 퍼블리싱 중심의 단순 계층 구조를 채택한다.

- 공용 UI 컴포넌트는 `src/components`에서 관리한다.
- 스타일 및 디자인 토큰은 `src/styles`에서 관리한다.
- 아이콘 원본 자산은 `src/assets/icons`에서 관리한다.
- 화면 라우팅은 `src/pages`에서 관리한다.

## 3. 표준 디렉터리 구조

```txt
src/
  assets/
    icons/
      raw24/                  # 24px 아이콘 원본 SVG
      raw32/                  # 32px 아이콘 원본 SVG
      raw60/                  # 60px 아이콘 원본 SVG
  components/
    atoms/                    # 단일 책임의 최소 UI 단위 (Button, Icon, Input, Badge 등)
                             # 파일 예시: Button.tsx, Icon.tsx, icon24Raw.ts
    molecules/                # atoms 2개 이상을 조합한 입력/표시 단위
                             # 파일 예시: SearchField.tsx, LabeledInput.tsx, FilterChipGroup.tsx
    organisms/                # molecules + atoms 조합의 섹션/블록 단위
                             # 파일 예시: FormSection.tsx, DataTable.tsx, ModalBody.tsx
    layouts/                  # 페이지 골격/배치 전용 컴포넌트
                             # 파일 예시: PageFrame.tsx, SplitLayout.tsx, ContentSection.tsx
    preview/                  # 디자인 가이드/상태 검증용 프리뷰 컴포넌트
                             # 파일 예시: Button.preview.tsx, Icon.preview.tsx
    index.ts                  # components 배럴 export (외부 import 단일 진입점)
  styles/
    common.css                # reset 및 공통 전역 스타일
    globals.css               # Tailwind base/components/utilities 및 전역 애니메이션
    tokens.css                # (선택) 토큰 원본 선언 파일
  pages/
    _app.tsx                  # 전역 스타일 로드 및 앱 진입점
    index.tsx                 # 기본 라우트
    api/                      # API route
```

## 4. 디렉터리 책임 정의

### 4.1 `src/assets`

정적 원본 자산만 보관한다. 디자인 원본은 가공 없이 보존하며, 렌더링 로직은 포함하지 않는다.

### 4.2 `src/components`

프로젝트 공용 UI의 단일 출처로 운영한다. 화면 도메인 로직, API 호출, 상태 관리 로직은 포함하지 않으며, 재사용 가능한 props 인터페이스를 기준으로 작성한다.

#### 4.2.1 `atoms`

- 단일 UI 역할을 수행하는 최소 단위 컴포넌트를 배치한다.
- 디자인 토큰 및 variant(CVA) 기반 스타일을 우선 적용한다.
- 외부 데이터 fetch, 비즈니스 조건 분기는 포함하지 않는다.

#### 4.2.2 `molecules`

- `atoms`를 조합하여 입력/표시 단위를 구성한다.
- 폼 라벨, 입력 그룹, 검색 박스 등 반복 사용 단위를 우선 수용한다.
- 페이지 전용 요구사항은 포함하지 않고 공용 props로 일반화한다.

#### 4.2.3 `organisms`

- `molecules`와 `atoms`를 조합하여 영역 단위 UI를 구성한다.
- 테이블, 섹션 블록, 모달 내부 본문 등 비교적 복합 구조를 포함한다.
- 도메인별 API 호출/상태 저장소 의존은 허용하지 않는다.

#### 4.2.4 `layouts`

- 페이지의 상하/좌우 배치, 여백 체계, 영역 분할 규칙을 제공한다.
- 시각적 배치 책임만 가지며, 기능 로직은 포함하지 않는다.

#### 4.2.5 `preview`

- 상태별 시각 검증(default, hover, active/focus, disabled)을 수행한다.
- 실제 서비스 라우트가 아닌 가이드 목적의 렌더링 기준을 제공한다.

#### 4.2.6 `index.ts`

- `components` 하위 모듈의 공식 export 집합을 관리한다.
- 서비스 코드에서는 배럴 경유 import를 우선 사용하여 경로 일관성을 유지한다.

### 4.3 `src/styles`

전역 스타일과 디자인 토큰 파일을 운영한다. 컴포넌트 상태 스타일은 각 컴포넌트에서 처리하고, reset 및 공통 규칙만 전역에서 관리한다.

### 4.4 `src/pages`

라우트 엔트리와 화면 조립을 담당한다. 복잡한 UI 정의 및 상세 표현 로직은 `src/components`로 위임한다.

## 5. 컴포넌트 운영 규칙

- Atomic 구분을 유지한다: `atoms -> molecules -> organisms -> layouts`.
- `components`는 본 프로젝트의 `shared` 계층으로 간주한다.
- 아이콘은 원본 SVG(`assets/icons/raw*`)와 렌더링 맵(`icon*Raw.ts`)을 분리 관리한다.
- 버튼/아이콘 등 상태값(hover, active, focus, disabled)은 Figma 정의 기준으로 검증한다.

## 6. 스타일 정책

- 전역 공통 스타일은 `src/styles/common.css`를 기준으로 관리한다.
- 전역 Tailwind 및 애니메이션 유틸은 `src/styles/globals.css`에서 관리한다.
- 디자인 토큰은 Tailwind theme 또는 `tokens.css`(선택)에서 일관되게 관리한다.
- 현재 표준은 CSS 기반이며, SCSS는 필수 요구가 있는 경우에만 도입한다.

## 7. Asset 관리 기준

### 7.1 아이콘 원본 자산

- 24px 원본 SVG: `src/assets/icons/raw24`
- 32px 원본 SVG: `src/assets/icons/raw32`
- 60px 원본 SVG: `src/assets/icons/raw60`

### 7.2 아이콘 렌더링 맵

- 24px 아이콘 맵: `src/components/atoms/icon24Raw.ts`
- 32px 아이콘 맵: `src/components/atoms/icon32Raw.ts`
- 60px 아이콘 맵: `src/components/atoms/icon60Raw.ts`
- 공통 아이콘 컴포넌트: `src/components/atoms/Icon.tsx`

### 7.3 전역 스타일 자산

- 공통 reset: `src/styles/common.css`
- Tailwind 진입점 및 전역 애니메이션: `src/styles/globals.css`
- 전역 스타일 로드: `src/pages/_app.tsx`

## 8. 실행 명령

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- 개발 서버 실행 후 기본 접속 주소: `http://localhost:3000`
- API 라우트 기본 예시: `http://localhost:3000/api/hello`
