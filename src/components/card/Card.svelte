<script>
	import placeholder from '$img/placeholder.png';

	export let src = placeholder;
	export let alt = 'placeholder image';
	export let title = 'Example Card';
	export let description = 'This is an example card component';
	export let button = 'Button';
	export let link = '';
</script>

<div class="h-80 card card-side bg-base-100 shadow-xl bg-neutral">
	<figure class="h-full">
		<img class="h-full" {src} {alt} />
	</figure>
	<div class="card-body">
		<h2 class="card-title text-2xl font-bold">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<a class="btn btn-primary" href={link}>{button}</a>
		</div>
	</div>
</div>
