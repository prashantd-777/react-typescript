
type Props = {
    isLoggedIn: Boolean,
    component: React.ComponentType

}
export default function PublicComponent({
    isLoggedIn,
    component: Component
}: Props) {
    return <div>
        {isLoggedIn ? (
            <Component />
        ): null}
    </div>
}