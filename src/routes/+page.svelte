<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->

		<div role="tablist" class="tabs tabs-bordered w-full">
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
			<div role="tabpanel" class="tab-content p-10">
				Lorem ipsum dolor sit amet c o n s e c t e t u r a d i p i s c i n g e l i t. A b a d i p i
				s i c i n g e l i t. A b a a c c u s a m u s a l i q u i p e x e a c o m m o d o c o n s e q
				u a t. Lorem ipsum dolor sit amet c o n s e c t e t u r a d i p i s c i n g e l i t. A b a d
				i p i s i c i n g e l i t. A b a a c c u s a m u s a l i q u i p e x e a c o m m o d o c o n
				s e q u a t. Lorem ipsum dolor sit amet c o n s e c t e t u r a d i p i s c i n g e l i t. A
				b a d i p i s i c i n g e l i t. A b a a c c u s a m u s a l i q u i p e x e a c o m m o d o
				c o n s e q u a t. Lorem ipsum dolor sit amet c o n s e c t e t u r a d i p i s c i n g e l
				i t. A b
			</div>

			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 2" checked />
			<div role="tabpanel" class="tab-content p-10">Tab content 2</div>

			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
			<div role="tabpanel" class="tab-content p-10">Tab content 3</div>
		</div>

		<button class="btn">Hello daisyUI</button>

		<button class="btn btn-primary">Button</button>

		<details class="dropdown">
			<summary class="m-1 btn">open or close</summary>
			<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
				<li><a>Item 1</a></li>
				<li><a>Item 2</a></li>
			</ul>
		</details>

		<ul class="steps steps-vertical">
			<li class="step step-primary">Register</li>
			<li class="step step-primary">Choose plan</li>
			<li class="step">Purchase</li>
			<li class="step">Receive Product</li>
		</ul>

		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
