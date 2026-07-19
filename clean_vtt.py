import re
import sys

def clean_vtt(path):
    with open(path, encoding='utf-8') as f:
        lines = f.readlines()
    out = []
    prev = None
    for line in lines:
        line = line.strip()
        if not line or line.startswith(('WEBVTT', 'Kind:', 'Language:', 'NOTE')):
            continue
        if re.match(r'^\d{2}:\d{2}:\d{2}\.\d{3} -->', line):
            continue
        line = re.sub(r'<[^>]+>', '', line).strip()
        if not line or line == prev:
            continue
        prev = line
        out.append(line)
    return ' '.join(out)

for num in ['51', '52', '53', '54', '55', '56', '56B', '57']:
    text = clean_vtt(f'transcript_{num}.es.vtt')
    with open(f'clean_{num}.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print(num, len(text))
