<script>
	import Main from '$layout/Main.svelte';
	import SideBar from '$layout/Sidebar.svelte';

	import course_img from '$img/course.png';
</script>

<Main>
	<SideBar slot="sidebar" />

	<div slot="content">
		<h1 class="text-4xl font-bold text-white">Created Courses</h1>
		<br />

		<div class="card card-side bg-base-100 shadow-xl bg-neutral">
			<figure class="h-full w-96">
				<img class="h-full" src={course_img} alt="Movie" />
			</figure>
			<div class="card-body">
				<h2 class="card-title text-2xl font-bold">Example</h2>
				<p>
					This is an example on how a course will look like. This is an example on how a course will
					look like.
				</p>
				<div class="card-actions justify-end">
					<a class="btn btn-primary" href="/courses/examples">Open</a>
				</div>
			</div>
		</div>
	</div>
</Main>
