(function () {
  'use strict';

  // ページを追加するときはここだけ編集する
  // coming: true を付けると未公開扱い（リンクなし・薄表示）

  const BP_PAGES = [
    { step: 'BP STEP 01', title: 'GAS とは何か',                        href: 'bp01.html'  },
    { step: 'BP STEP 02', title: 'Blueprint で始める',                   href: 'bp02.html'  },
    { step: 'BP STEP 03', title: '最初の Ability を作る',                href: 'bp03.html'  },
    { step: 'BP STEP 04', title: 'GameplayTag で状態管理',               href: 'bp04.html'  },
    { step: 'BP STEP 05', title: '攻撃アビリティを作る',                 href: 'bp05.html'  },
    { step: 'BP STEP 06', title: '攻撃フレームを制御する',               href: 'bp06.html'  },
    { step: 'BP STEP 07', title: '複数のアビリティとタグを組み合わせる', href: 'bp07.html'  },
    { step: 'BP STEP 08', title: 'コンボ攻撃（3連撃）',                  href: 'bp08.html'  },
    { step: 'BP REF',     title: 'ノード リファレンス',                  href: 'bpRef.html' },
    { step: 'BP EX 01',   title: 'コンボ先行入力',                       href: 'bpEx1.html' },
    { step: 'BP EX 02',   title: 'ヒット検出・ダメージ・GameplayCue',    href: 'bpEx2.html' },
  ];

  const CPP_PAGES = [
    { step: 'STEP 01', title: 'GAS とは何か',                     href: 'step01.html' },
    { step: 'STEP 02', title: '最小構成のセットアップ',            href: 'step02.html' },
    { step: 'STEP 03', title: '最初の Ability を作る',             href: 'step03.html' },
    { step: 'STEP 04', title: 'AttributeSet の基本',               href: 'step04.html' },
    { step: 'STEP 05', title: 'GameplayEffect でダメージを与える', href: 'step05.html' },
    { step: 'STEP 06', title: 'GameplayTag を使う',                href: 'step06.html' },
  ];

  const current = location.pathname.split('/').pop() || '';
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const isBP  = BP_PAGES.some(p => p.href === current);
  const isCPP = CPP_PAGES.some(p => p.href === current);
  if (!isBP && !isCPP) return;

  function navItem(page) {
    const isCurrent = page.href === current;
    const isComing  = !!page.coming;
    const cls  = isCurrent ? 'current' : isComing ? 'coming' : 'done';
    const tag  = (isCurrent || isComing) ? 'div' : 'a';
    const href = tag === 'a' ? ` href="${page.href}"` : '';
    return (
      `<${tag} class="nav-item ${cls}"${href}>` +
      `<span class="nav-dot"></span>` +
      `<span class="nav-text">` +
      `<span class="nav-step">${page.step}</span>` +
      `<span class="nav-title">${page.title}</span>` +
      `</span>` +
      `</${tag}>`
    );
  }

  let html = '';

  if (isBP) {
    html =
      `<div class="sidebar-heading">` +
        `<a href="./">GameplayAbilities 入門</a>` +
        `<div class="sidebar-track">Blueprint 編</div>` +
      `</div>` +
      BP_PAGES.map(navItem).join('') +
      `<div class="nav-divider"></div>` +
      `<a class="nav-item nav-next-track" href="step01.html">` +
        `<span class="nav-dot"></span>` +
        `<span class="nav-text">` +
          `<span class="nav-step">→ C++ 編へ</span>` +
          `<span class="nav-title">AttributeSet まで学ぶ</span>` +
        `</span>` +
      `</a>`;
  } else {
    html =
      `<div class="sidebar-heading">` +
        `<a href="./">GameplayAbilities 入門</a>` +
      `</div>` +
      CPP_PAGES.map(navItem).join('');
  }

  sidebar.innerHTML = html;
})();
