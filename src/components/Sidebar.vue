<script setup>
import { useUsersStore } from '../stores/user.store';

const userStore = useUsersStore();
const avatarName = userStore.user.avatar
</script>

<template>
  <nav id="sidebar" class="sidebar js-sidebar">
		<div class="sidebar-content js-simplebar">
			<router-link :to="{name: 'home', params: { avatar: avatarName }}" class="sidebar-brand">
				<span class="align-middle">AI Avatars</span>
			</router-link>

			<ul class="sidebar-nav">
				<li class="sidebar-header">
					Navigation
				</li>
				<li class="sidebar-item">
					<router-link :to="{name: 'home', params: { avatar: avatarName }}" class="sidebar-link">
						<i class="align-middle" data-feather="cpu"></i> <span class="align-middle">Avatar</span>
					</router-link>
				</li>

				<li class="sidebar-item">
					<router-link :to="{name: 'personality', params: { avatar: avatarName }}" class="sidebar-link">
						<i class="align-middle" data-feather="meh"></i> <span class="align-middle">Personality</span>
					</router-link>
				</li>

				<li class="sidebar-item">
					<router-link :to="{name: 'agents', params: { avatar: avatarName }}" class="sidebar-link">
						<i class="align-middle" data-feather="layers"></i> <span class="align-middle">Agents</span>
					</router-link>
				</li>

				<li class="sidebar-item">
					<router-link :to="{name: 'plugins', params: { avatar: avatarName }}" class="sidebar-link">
						<i class="align-middle" data-feather="package"></i> <span class="align-middle">Plugins</span>
					</router-link>
				</li>

				<li class="sidebar-item">
					<router-link :to="{name: 'models', params: { avatar: avatarName }}" class="sidebar-link">
						<i class="align-middle" data-feather="codesandbox"></i> <span class="align-middle">Models</span>
					</router-link>
				</li>

				<li class="sidebar-item">
					<router-link to="/account" class="sidebar-link">
						<i class="align-middle" data-feather="user"></i> <span class="align-middle">Account</span>
					</router-link>
				</li>

				<li class="sidebar-header">
					Library
				</li>
			</ul>

		</div>
	</nav>
</template>