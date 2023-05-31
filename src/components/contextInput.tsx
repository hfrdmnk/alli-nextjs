'use client';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { Wand2 } from 'lucide-react';

import { useState } from 'react';

export default function ContextInput() {
	const [wordCount, setWordCount] = useState(0);

	function handleInput(event: React.FormEvent<HTMLTextAreaElement>) {
		const value = event.currentTarget.value;
		const words = value.trim().split(/\s+/);
		setWordCount(value === '' ? 0 : words.length);
	}

	return (
		<div className="flex flex-col">
			<div className="mb-4">
				<Label htmlFor="context" className="text-gray-700">
					Study materials
				</Label>
				<Textarea
					placeholder="Give me all relevant context, so I can create better flashcards."
					id="context"
					onInput={handleInput}
				/>
				<p
					className={cn(
						'text-sm text-muted-foreground',
						wordCount > 1000 && 'text-red-600'
					)}>
					Context Length: {wordCount} {wordCount === 1 ? 'word' : 'words'} (less
					than 1000 for better results.)
				</p>
			</div>
			<Button
				variant="ghost"
				className="self-end"
				disabled={wordCount === 0 ? true : false}>
				<Wand2 className="w-4 h-4 mr-2" /> Generate flashcards
			</Button>
		</div>
	);
}
