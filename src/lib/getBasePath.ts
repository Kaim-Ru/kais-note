export function getBasePath(): string {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? '/kais-note' : '';
}

export function withBasePath(path: string): string {
  // 外部URLの場合はそのまま返す
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const basePath = getBasePath();

  // すでにbasePathで始まっている場合はそのまま返す
  if (path.startsWith(basePath + '/')) {
    return path;
  }

  // パスが/で始まらない場合は追加
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
