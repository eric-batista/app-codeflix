export type CategoryProperties = {
    name: string
    description?: string
    is_active?: boolean
    created_at?: Date
}

export default class Category {
    constructor(public readonly props: CategoryProperties) {
        this.description = props.description
        this.is_active = props.is_active
        this.props.created_at = props.created_at ?? new Date()
    }

    get name(): string {
        return this.props.name
    }

    get description(): string | undefined {
        return this.props.description
    }

    private set description(value: string) {
        this.props.description = value ?? null
    }

    get is_active(): boolean | undefined {
        return this.props.is_active
    }

    private set is_active(value: boolean) {
        this.props.is_active = value ?? true
    }

    get created_at(): Date | undefined {
        return this.props.created_at
    }
}
